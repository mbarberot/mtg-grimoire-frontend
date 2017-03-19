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
  var semanticUiAssets = new Funnel('bower_components/semantic-ui-sass/app/assets/fonts/semantic-ui', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/fonts'
  });
  
  app.import('bower_components/mana/css/mana.css');
  var manaAssets = new Funnel('bower_components/mana/fonts', {
    srcDir: '/',
    include: ['**/*.*'],
    destDir: '/fonts'
  });
  return app.toTree(new MergeTrees([semanticUiAssets, manaAssets]));
};
