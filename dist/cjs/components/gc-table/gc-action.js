"use strict";
var layout = require("../../templates/gc-table/gc-action")["default"] || require("../../templates/gc-table/gc-action");
var Action;

Action = Ember.Component.extend({
  tagName: 'a',
  layout: layout
});

exports["default"] = Action;