"use strict";
var HeadRow = require("./gl-head-row")["default"] || require("./gl-head-row");
var Head;

Head = Ember.CollectionView.extend({
  tagName: 'thead',
  classNames: ['gl-table-head'],
  itemViewClass: HeadRow,
  hasIndexCell: false,
  hasSelectAllCell: false
});

exports["default"] = Head;