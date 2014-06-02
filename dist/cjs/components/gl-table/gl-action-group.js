"use strict";
var Action = require("./gl-action")["default"] || require("./gl-action");
var ActionGroup;

ActionGroup = Ember.CollectionView.extend({
  classNames: ['gl-table-action-group'],
  itemViewClass: Action
});

exports["default"] = ActionGroup;