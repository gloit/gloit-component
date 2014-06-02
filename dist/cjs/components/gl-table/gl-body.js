"use strict";
var Row = require("./gl-row")["default"] || require("./gl-row");
var MultipleSelectableRow = require("./gl-multiple-selectable-row")["default"] || require("./gl-multiple-selectable-row");
var SingleSelectableRow = require("./gl-single-selectable-row")["default"] || require("./gl-single-selectable-row");
var Body;

Body = Ember.CollectionView.extend({
  tagName: 'tbody',
  classNames: ['gl-table-body'],
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