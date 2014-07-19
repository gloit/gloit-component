"use strict";
var Topbar;

Topbar = Ember.Component.extend({
  tagName: 'caption',
  classNames: ['gc-table-top-bar'],
  barActions: [],
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
});

exports["default"] = Topbar;