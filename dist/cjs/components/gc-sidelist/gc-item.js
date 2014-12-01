"use strict";
var layout = require("../../templates/gc-sidelist/gc-item")["default"] || require("../../templates/gc-sidelist/gc-item");
var Item;

Item = Ember.Component.extend({
  classNames: ['gc-sidelist-item'],
  layout: layout
});

exports["default"] = Item;