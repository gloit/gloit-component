"use strict";
var Action = require("./gc-action")["default"] || require("./gc-action");
var Topbar = require("./gc-topbar")["default"] || require("./gc-topbar");
var Head = require("./gc-head")["default"] || require("./gc-head");
var Body = require("./gc-body")["default"] || require("./gc-body");
var Table;

Table = Ember.Component.extend({
  topbarView: Topbar,
  headView: Head,
  bodyView: Body,
  init: function() {
    this._super();
    if (Ember.isNone(this.get('selection'))) {
      return this.set('selection', new Ember.Set());
    }
  },
  tagName: 'table',
  classNames: ['table', 'table-bordered', 'table-hover', 'gc-table'],
  classNameBindings: ['clickable:table-clickable'],
  multiple: false,
  selection: null,
  indexed: false,
  rowSelectable: false,
  topActions: [],
  hasTopActions: Ember.computed.notEmpty('topActions'),
  clickable: (function() {
    return !this.get('multiple') && this.get('rowSelectable');
  }).property('multiple', 'rowSelectable'),
  headContent: (function() {
    var headContent;
    headContent = Ember.A();
    headContent.pushObject(this.get('columns') || []);
    return headContent;
  }).property('columns.@each', 'indexed'),
  click: function(evt) {
    var view;
    view = Ember.View.views[evt.target.id];
    if (this._clickFromAction(view)) {
      return this.triggerAction({
        action: view.get('content.name')
      });
    }
  },
  _clickFromAction: function(target) {
    return target && target.constructor === Action;
  },
  actions: {
    selectRow: function(row) {
      this.get('selection').clear();
      this.get('selection').add(row.get('content'));
      return this.triggerAction({
        action: 'select',
        actionContext: row.get('content')
      });
    },
    selectAll: function() {
      return this.get('selection').addEach(this.get('content'));
    },
    deselectAll: function() {
      return this.get('selection').clear();
    }
  }
});

exports["default"] = Table;