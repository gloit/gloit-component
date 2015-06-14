/* jshint node: true */
'use strict';

var mergeTrees = require( 'broccoli-merge-trees' ),
    pickFiles  = require( 'broccoli-static-compiler' );

module.exports = {
  name: 'gloit-component',

  included: function (app) {
    app.import({
      development: 'bower_components/toastr/toastr.css',
      production: 'bower_components/toastr/toastr.min.css'
    });

    app.import({
      development: 'bower_components/bootstrap/dist/js/bootstrap.js',
      production: 'bower_components/bootstrap/dist/js/bootstrap.min.js'
    });

    app.import({
      development: 'bower_components/animate.css/animate.css',
      production: 'bower_components/animate.css/animate.min.css'
    });

    app.import({
      development: 'bower_components/slimscroll/jquery.slimscroll.js',
      production: 'bower_components/slimscroll/jquery.slimscroll.min.js'
    });

    app.import({
      development: 'bower_components/pace/pace.js',
      production: 'bower_components/pace/pace.min.js'
    });

    app.import({
      development: 'bower_components/numeral/numeral.js',
      production: 'bower_components/numeral/min/numeral.min.js'
    });

    app.import({
      development: 'bower_components/toastr/toastr.js',
      production: 'bower_components/toastr/toastr.min.js'
    });

    app.import('bower_components/sweetalert/dist/sweetalert.css');

    app.import({
      development: 'bower_components/sweetalert/dist/sweetalert-dev.js',
      production: 'bower_components/sweetalert/dist/sweetalert.min.js'
    });

    app.import('bower_components/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js');

    app.import({
      development: 'bower_components/bootstrap-datetimepicker/css/bootstrap-datetimepicker.css',
      production: 'bower_components/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'
    });

    app.import({
      development: 'bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js',
      production: 'bower_components/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js'
    });

  },

  postprocessTree: function(type, tree) {
    return mergeTrees([tree,
                      pickFiles('bower_components/fontawesome/fonts', {
                        srcDir: '/',
                        files: ['*.*'],
                        destDir: '/fonts'
                      }),
                      pickFiles('bower_components/bootstrap/fonts', {
                        srcDir: '/',
                        files: ['*.*'],
                        destDir: '/fonts'
                      }),
                      pickFiles('bower_components/googlefonts/fonts', {
                        srcDir: '/',
                        files: ['*.woff2'],
                        destDir: '/assets/fonts'
                      })
    ], {
      overwrite: true
    });
  }
};
