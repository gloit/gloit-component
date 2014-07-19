"use strict";
var SelectableRow = require("./gc-selectable-row")["default"] || require("./gc-selectable-row");
var layout = require("../../templates/gc-table/gc-multiple-selectable-row")["default"] || require("../../templates/gc-table/gc-multiple-selectable-row");
var MultipleSelectableRow;

MultipleSelectableRow = SelectableRow.extend({
  layout: layout,
  multipleBinding: 'parentView.multiple'
});

exports["default"] = MultipleSelectableRow;