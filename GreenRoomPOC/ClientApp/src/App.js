import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
// import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Translate } from './components/Translate';
import Preform from './components/preform';
import Home from './components/Home';

const App = () => {
  // static displayName = App.name;

  return (
    <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/translate' component={Translate} />
    <Route path='/fetch-data' component={FetchData} />
    <Route path='/preform' component={Preform} />
  </Layout>
  );
};
export default App;