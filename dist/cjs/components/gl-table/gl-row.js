"use strict";
var Cell = require("./gl-cell")["default"] || require("./gl-cell");
var layout = require("../../templates/gl-table/gl-row")["default"] || require("../../templates/gl-table/gl-row");
var Row;

Row = Ember.Component.extend({
  cellView: Cell,
  tagName: 'tr',
  layout: layout,
  classNames: ['gl-table-row'],
  classNameBindings: ['selected:info'],
  indexedBinding: 'parentView.indexed',
  columnsBinding: 'parentView.columns',
  index: (function() {
    return this.get('contentIndex') + 1;
  }).property('contentIndex')
});

exports["default"] = Row;