"use strict";
var Item = require("./gl-item")["default"] || require("./gl-item");
var Sidelist;

Sidelist = Ember.ListView.extend({
  classNames: ['gl-sidelist'],
  itemViewClass: Item,
  didInsertElement: function() {
    this.set('height', Ember.$('.gl-sidelist').parent().height());
    return this._super();
  }
});

exports["default"] = Sidelist;