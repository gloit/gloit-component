"use strict";
var Action = require("./gl-action")["default"] || require("./gl-action");
var ActionGroup = require("./gl-action-group")["default"] || require("./gl-action-group");
var Topbar = require("./gl-topbar")["default"] || require("./gl-topbar");
var Head = require("./gl-head")["default"] || require("./gl-head");
var Body = require("./gl-body")["default"] || require("./gl-body");
var Table;

Table = Ember.Component.extend({
  topbarView: Topbar,
  actionGroupView: ActionGroup,
  headView: Head,
  bodyView: Body,
  init: function() {
    this._super();
    if (Ember.isNone(this.get('selection'))) {
      return this.set('selection', new Ember.Set());
    }
  },
  tagName: 'table',
  classNames: ['table', 'table-bordered', 'table-hover', 'gl-table'],
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