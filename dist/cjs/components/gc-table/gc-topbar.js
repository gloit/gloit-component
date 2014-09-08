"use strict";
var ActionGroup = require("./gc-action-group")["default"] || require("./gc-action-group");
var layout = require("../../templates/gc-table/gc-topbar")["default"] || require("../../templates/gc-table/gc-topbar");
var Topbar;

Topbar = Ember.Component.extend({
  actionGroupView: ActionGroup,
  tagName: 'caption',
  classNames: ['gc-table-top-bar'],
  layout: layout,
  barActions: [],
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
});

exports["default"] = Topbar;