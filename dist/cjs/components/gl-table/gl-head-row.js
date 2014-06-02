"use strict";
var HeadCell = require("./gl-head-cell")["default"] || require("./gl-head-cell");
var SelectAllCell = require("./gl-select-all-cell")["default"] || require("./gl-select-all-cell");
var HeadRow;

HeadRow = Ember.CollectionView.extend({
  tagName: 'tr',
  classNames: ['gl-table-head-row'],
  itemViewClass: HeadCell,
  hasIndexCellBinding: 'parentView.hasIndexCell',
  hasSelectAllCellBinding: 'parentView.hasSelectAllCell',
  didInsertElement: function() {
    if (this.get('hasIndexCell')) {
      this._createIndexCell();
    }
    if (this.get('hasSelectAllCell')) {
      return this._createSelectAllCell();
    }
  },
  _createIndexCell: function() {
    return this.unshiftObject(HeadCell.create({
      content: Ember.Object.create({
        width: 30,
        textAlign: 'center',
        title: '#'
      })
    }));
  },
  _createSelectAllCell: function() {
    return this.unshiftObject(SelectAllCell.create());
  }
});

exports["default"] = HeadRow;