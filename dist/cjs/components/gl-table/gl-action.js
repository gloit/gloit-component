"use strict";
var layout = require("../../templates/gl-table/gl-action")["default"] || require("../../templates/gl-table/gl-action");
var Action;

Action = Ember.Component.extend({
  tagName: 'a',
  layout: layout
});

exports["default"] = Action;