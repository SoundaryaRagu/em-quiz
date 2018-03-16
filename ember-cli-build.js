'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });
  app.import('bower_components/Semantic/dist/semantic.min.css');
  app.import('node_modules/js-cookie/src/js.cookie.js');
  return app.toTree();
};
