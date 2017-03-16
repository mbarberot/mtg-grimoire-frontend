/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components/semantic-ui-sass/app/assets/stylesheets']
    }
  });
  var cssAssets = new Funnel('bower_components/semantic-ui-sass/app/assets/fonts/semantic-ui', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/assets/fonts'
  });
  return app.toTree(new MergeTrees([cssAssets]));
};
