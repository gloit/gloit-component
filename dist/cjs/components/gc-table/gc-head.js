"use strict";
var HeadRow = require("./gc-head-row")["default"] || require("./gc-head-row");
var Head;

Head = Ember.CollectionView.extend({
  tagName: 'thead',
  classNames: ['gc-table-head'],
  itemViewClass: HeadRow,
  hasIndexCell: false,
  hasSelectAllCell: false
});

exports["default"] = Head;