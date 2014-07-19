"use strict";
var Action = require("./gc-action")["default"] || require("./gc-action");
var ActionGroup;

ActionGroup = Ember.CollectionView.extend({
  classNames: ['gc-table-action-group'],
  itemViewClass: Action
});

exports["default"] = ActionGroup;