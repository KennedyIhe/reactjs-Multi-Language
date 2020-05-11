var config = {}

config.endpoint = 'https://translation-db.documents.azure.com:443/';
config.key = 'KEY';
config.database = { id: 'TranslationsDb' };
  
  config.container = {
    id: 'Languages'
  }
  config.items = {
      en:{
        "id": "english",
        "code": "en",
        "es": "Spanish",
        "en": "English",
        "menus": {
            "home": "Home",
            "translate": "Translate"
        },
        "pageHomeTitle": "Welcome to the Green Room",
        "pageHomeDesc": "A place to help prepare you for joining ",
        "pageHomeStartBtn": "LET'S GET STARTED",
        "pageHomeContentText": "Welcome at our place.",
        "pagePreformTitle":"Hello! Which best describes you?",
        "pagePreformRadios": {
            "interested": "Interested in ",
            "accepted": "Accepted  job offer",
            "already": "Already working for "
        },
        "pagePreformInputs":{
            "firstname": {
                "label":"First Name",
                "helpText":""
            },
            "lastname": {
                "label":"Last Name",
                "helpText":"We'll never share your name with guacamole."
            },
            "email": {
                "label":"Email",
                "helpText":"This is a help text"
            }
        },
        "pagePreformSubmitBtn":"Submit",
        "user-custom-0112":""
      },
      es:{
        "id": "spanish",
        "code": "es",
        "es": "Español",
        "en": "Inglés",
        "menus": {
            "home": "Casa",
            "translate": "Traducir"
        },
        "pageHomeTitle": "Bienvenido a la Green Room",
        "pageHomeDesc": "Un lugar para ayudarlo a prepararse para unirse a ",
        "pageHomeStartBtn": "EMPECEMOS",
        "pageHomeContentText": "Welcome at our place.",
        "pagePreformTitle":"¡Hola! ¿Lo que te describe mejor?",
        "pagePreformRadios": {
            "interested": "Interesado en ",
            "accepted": "Oferta de trabajo aceptada de ",
            "already": "Ya estoy trabajando para "
        },
        "pagePreformInputs":{
            "firstname": {
                "label":"Primer nombre",
                "helpText":""
            },
            "lastname": {
                "label":"Apellido",
                "helpText":"Nunca compartiremos su nombre con guacamole."
            },
            "email": {
                "label":"Correo electrónico",
                "helpText":"Este es un texto de ayuda"
            }
        },
        "pagePreformSubmitBtn":"Seguir",
        "user-custom-0112":""
      }
  }

  module.exports = config