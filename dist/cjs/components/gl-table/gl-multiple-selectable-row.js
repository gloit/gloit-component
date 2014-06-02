"use strict";
var SelectableRow = require("./gl-selectable-row")["default"] || require("./gl-selectable-row");
var layout = require("../../templates/gl-table/gl-multiple-selectable-row")["default"] || require("../../templates/gl-table/gl-multiple-selectable-row");
var MultipleSelectableRow;

MultipleSelectableRow = SelectableRow.extend({
  layout: layout,
  multipleBinding: 'parentView.multiple'
});

exports["default"] = MultipleSelectableRow;