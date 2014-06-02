"use strict";
var ColumnModel;

ColumnModel = Ember.Object.extend({
  title: void 0,
  width: 100,
  textAlign: 'left',
  cellContentPath: void 0,
  formatCellContent: void 0
});

exports["default"] = ColumnModel;