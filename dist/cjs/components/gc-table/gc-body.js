"use strict";
var Row = require("./gc-row")["default"] || require("./gc-row");
var MultipleSelectableRow = require("./gc-multiple-selectable-row")["default"] || require("./gc-multiple-selectable-row");
var SingleSelectableRow = require("./gc-single-selectable-row")["default"] || require("./gc-single-selectable-row");
var Body;

Body = Ember.CollectionView.extend({
  tagName: 'tbody',
  classNames: ['gc-table-body'],
  itemViewClass: (function() {
    if (!this.get('rowSelectable')) {
      return Row;
    }
    if (this.get('multiple')) {
      return MultipleSelectableRow;
    } else {
      return SingleSelectableRow;
    }
  }).property('rowSelectable', 'multiple'),
  indexed: false,
  multiple: false,
  rowSelectable: false,
  selection: null,
  columns: [],
  single: (function() {
    return !this.get('multiple') && this.get('rowSelectable');
  }).property('multiple', 'rowSelectable')
});

exports["default"] = Body;