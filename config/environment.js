/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'mtg-grimoire-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.GRIMOIRE_API_URL = "http://localhost:8080";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.GRIMOIRE_API_URL = "https://mtg-grimoire-api.herokuapp.com";
  }

  ENV.contentSecurityPolicy = {
      'default-src': ["'none'"],
      'connect-src': ["'self'", ENV.APP.GRIMOIRE_API_URL],
      'font-src': ["'self'", "https://fonts.gstatic.com"],
      'script-src': ["'self'", "'unsafe-eval'"],
      'img-src': ["'self'"],
      'style-src': ["'self'", "https://fonts.googleapis.com"],
      'media-src': ["'self'"]
    };

  return ENV;
};
