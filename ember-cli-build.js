'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      './app/components/**/*.hbs',
      './app/index.html',
      './app/templates/**/*.hbs'
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    prember: {
      urls: [
        "/",
        "/exhibit",
        "/exhibit/about",
        "/exhibit/podcast",
        // podcast episodes.
        "/exhibit/teams",
        // "/exhibit/teams/clip/",
        "/exhibit/teams/team-i",
        "/exhibit/teams/team-s",
        "/exhibit/teams/team-z",
        "/exhibit/teams/team-l",
        "/exhibit/teams/team-j",
        "/exhibit/teams/team-t",
        // "/exhibit/teams/team-i/clip/",
        "/exhibit/artists",
        "/exhibit/artists/nicola-ginzel",
        "/exhibit/artists/luisa-muhr",
        "/exhibit/artists/terttu-uibopuu",
        "/exhibit/artists/jonas-tarm",
        "/exhibit/artists/saddie-choua",
        "/exhibit/artists/ada-van-hoorebeke",
        "/exhibit/artists/kira-nova",
        "/exhibit/artists/ieva-mediodia",
        "/exhibit/artists/alex-camilleri",
        "/exhibit/artists/mariella-cassar-cordina",
        "/exhibit/artists/justyna-gorowska",
        "/exhibit/artists/anna-bera",
      ],
    },
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules']
            }
          },
          require('tailwindcss')('./app/tailwind/config.js'),
          require('autoprefixer'),
          // ...isProduction ? [purgeCSS] : []
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
