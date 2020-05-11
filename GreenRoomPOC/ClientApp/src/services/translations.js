// import { config } from "../configs/translations-config";
// import * as fs from 'fs';
const mkdirp = require('mkdirp');
// import { sync as mkdirpSync } from 'mkdirp';

const config = require('../configs/translations-config');
const CosmosClient = require('@azure/cosmos').CosmosClient;
const fs = require('fs');

const endpoint = config.endpoint;
const key = config.key;
const databaseId = config.database.id;
const containerId = config.container.id;
const partitionKey = { kind: 'Hash', paths: ['/menus'] };
const client = new CosmosClient({ endpoint, key });

// export { initDatabase, createTranslationFiles }

async function initDatabase() {
    createDatabase()
        .then(() => readDatabase())
        .then(() => createContainer())
        .then(() => readContainer())
        .then(() => scaleContainer())
        .then(() => createLanguageItem(config.items.en))
        .then(() => createLanguageItem(config.items.es))
        .then(() => createTranslationFiles())
        .then(() => {
            exit(`Completed successfully`)
        })
        .catch(error => {
            exit(`Completed with error ${JSON.stringify(error)}`)
        })
}

function exit(message) {
    console.log(message)
    console.log('Press any key to exit')
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.on('data', process.exit.bind(process, 0))
}

async function createDatabase() {
    const { database } = await client.databases.createIfNotExists({
        id: databaseId
    })
    console.log(`Created database:\n${database.id}\n`)
}

async function readDatabase() {
    const { resource: databaseDefinition } = await client
        .database(databaseId)
        .read()
    console.log(`Reading database:\n${databaseDefinition.id}\n`)
}

async function createContainer() {
    const { container } = await client
        .database(databaseId)
        .containers.createIfNotExists(
            { id: containerId },
            { offerThroughput: 400 }
        )
    console.log(`Created container:\n${config.container.id}\n`)
}

async function readContainer() {
    const { resource: containerDefinition } = await client
        .database(databaseId)
        .container(containerId)
        .read()
    console.log(`Reading container:\n${containerDefinition.id}\n`)
}

async function scaleContainer() {
    const { resource: containerDefinition } = await client
        .database(databaseId)
        .container(containerId)
        .read()
    const { resources: offers } = await client.offers.readAll().fetchAll();

    const newRups = 500;
    for (var offer of offers) {
        if (containerDefinition._rid !== offer.offerResourceId) {
            continue;
        }
        offer.content.offerThroughput = newRups;
        const offerToReplace = client.offer(offer.id);
        await offerToReplace.replace(offer);
        console.log(`Updated offer to ${newRups} RU/s\n`);
        break;
    }
}

async function createLanguageItem(itemBody) {
    const { item } = await client
        .database(databaseId)
        .container(containerId)
        .items.upsert(itemBody)
    console.log(`Created Language item with id:\n${itemBody.id}\n`)
}

async function createTranslationFiles() {
    console.log(`Querying container:\n${config.container.id}`);
    const supportedLanguages = ['en', 'es'];
    const LANG_DIR = './src/translations/';
    const querySpec = { query: 'SELECT * FROM docs' }

    const { resources: results } = await client
        .database(databaseId)
        .container(containerId)
        .items.query(querySpec)
        .fetchAll();
        // mkdirpSync(LANG_DIR);
    const dir = mkdirp.sync(LANG_DIR);
    console.log(`Created dir:\n${dir}`);
    for (var doc of results) {
        var fileUrl = `${LANG_DIR + doc.code}.json`;
        console.log(`Creating file:\n${fileUrl}`);
        fs.writeFileSync(fileUrl, JSON.stringify(doc, null, 2));
        console.log(`File created:\n${fileUrl}`);
    }
}

initDatabase();