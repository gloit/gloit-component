var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript  = require('broccoli-coffee');
var filterTemplates     = require('broccoli-template');
var vndFilterES6Modules = require('broccoli-dist-es6-module');
var compileLess         = require('broccoli-less-single');
var autoprefixer        = require('broccoli-autoprefixer');
var mergeTrees = require('broccoli-merge-trees');
var templateCompiler = require('broccoli-ember-hbs-template-compiler');
var instrument = require('broccoli-debug').instrument;

var lib                 = 'lib';
var less                = 'less';

function filterES6Modules(tree, opts) {
  return vndFilterES6Modules(tree, opts);
}

var styles = compileLess([less], 'gloit.less', 'gloit.css');
styles = autoprefixer(styles);

var templates = pickFiles(lib, {
  srcDir: '/templates',
  destDir: '/templates'
});

//instrument.print(templates)
templates = templateCompiler(templates, {
  module: true
});

lib = mergeTrees([lib, templates]);
/*
lib = filterTemplates(lib, {
  extensions: ['hbs'],
  compileFunction: 'Ember.Handlebars.compile'
});
*/

lib = filterCoffeeScript(lib, {
  bare: true
});

lib = filterES6Modules(lib, {
  global:      'Gloit',
  packageName: 'gloit',
  main:        'gloit',

  shim: {
    ember:      'Ember',
    handlebars: 'Handlebars'
  }
});

var extraAssets = pickFiles('images', {
   srcDir: '/',
   files: ['**/*'],
   destDir: '/images'
});

module.exports = mergeTrees([lib, styles, extraAssets]);
