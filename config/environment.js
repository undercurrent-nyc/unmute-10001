'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'u10001',
    environment,
    rootURL: '/',
    locationType: 'auto',
    metricsAdapters: [
      {
        name: "GoogleAnalytics",
        environments: ["development", "production"],
        config: {
          id: "UA-176143043-1",
          debug: environment === "development",
          trace: environment === "development",
          sendHitTask: environment === "development",
          // require: ["ecommerce"]
        },
      },
    ],
    emberHifi: {
      connections: [
        {name: 'NativeAudio', config: {}},
        {name: 'HLS', config: {}},
        {name: 'Howler', config: {}},
      ],
    },

    historySupportMiddleware: true, // For ember-router-scroll
    "ember-cli-mirage": {
      enabled: true
    },
    "ember-cli-markdown-resolver": {
      folders: {
        docs: "app/markdown"
      },
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
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
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV["ember-cli-mirage"].enabled = true;
  }

  return ENV;
};
