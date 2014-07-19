"use strict";
var Item = require("./gc-item")["default"] || require("./gc-item");
var Sidelist;

Sidelist = Ember.ListView.extend({
  classNames: ['gc-sidelist'],
  itemViewClass: Item,
  didInsertElement: function() {
    this.set('height', Ember.$('.gc-sidelist').parent().height());
    return this._super();
  }
});

exports["default"] = Sidelist;