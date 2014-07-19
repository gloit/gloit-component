"use strict";
var layout = require("../../templates/gc-sidebar/gc-starter")["default"] || require("../../templates/gc-sidebar/gc-starter");
var Starter;

Starter = Ember.Component.extend({
  layout: layout,
  classNames: ['gc-starter', 'dropdown'],
  items: []
});

exports["default"] = Starter;