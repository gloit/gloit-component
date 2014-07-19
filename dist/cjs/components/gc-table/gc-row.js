"use strict";
var Cell = require("./gc-cell")["default"] || require("./gc-cell");
var layout = require("../../templates/gc-table/gc-row")["default"] || require("../../templates/gc-table/gc-row");
var Row;

Row = Ember.Component.extend({
  cellView: Cell,
  tagName: 'tr',
  layout: layout,
  classNames: ['gc-table-row'],
  classNameBindings: ['selected:info'],
  indexedBinding: 'parentView.indexed',
  columnsBinding: 'parentView.columns',
  index: (function() {
    return this.get('contentIndex') + 1;
  }).property('contentIndex')
});

exports["default"] = Row;