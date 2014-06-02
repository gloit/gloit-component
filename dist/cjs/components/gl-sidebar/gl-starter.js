"use strict";
var layout = require("../../templates/gl-sidebar/gl-starter")["default"] || require("../../templates/gl-sidebar/gl-starter");
var Starter;

Starter = Ember.Component.extend({
  layout: layout,
  classNames: ['gl-starter', 'dropdown'],
  items: []
});

exports["default"] = Starter;