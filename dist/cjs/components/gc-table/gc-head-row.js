"use strict";
var HeadCell = require("./gc-head-cell")["default"] || require("./gc-head-cell");
var SelectAllCell = require("./gc-select-all-cell")["default"] || require("./gc-select-all-cell");
var HeadRow;

HeadRow = Ember.CollectionView.extend({
  tagName: 'tr',
  classNames: ['gc-table-head-row'],
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