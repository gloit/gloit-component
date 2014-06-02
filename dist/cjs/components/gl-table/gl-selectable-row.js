"use strict";
var Row = require("./gl-row")["default"] || require("./gl-row");
var SelectableRow;

SelectableRow = Row.extend({
  selectionBinding: 'parentView.selection',
  selected: (function(key, value) {
    if (value != null) {
      if (value) {
        this.get('selection').add(this.get('content'));
      } else {
        this.get('selection').remove(this.get('content'));
      }
      return value;
    } else {
      return this.get('selection').contains(this.get('content'));
    }
  }).property('selection.length')
});

exports["default"] = SelectableRow;