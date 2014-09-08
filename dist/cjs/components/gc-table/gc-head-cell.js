"use strict";
var styleBindings = require("../../mixins/style-bindings")["default"] || require("../../mixins/style-bindings");
var layout = require("../../templates/gc-table/gc-head-cell")["default"] || require("../../templates/gc-table/gc-head-cell");
var HeadCell;

HeadCell = Ember.Component.extend(styleBindings, {
  tagName: 'td',
  classNames: ['gc-table-head-cell'],
  styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
  minWidthBinding: 'content.width',
  textAlignBinding: 'content.textAlign',
  layout: layout
});

exports["default"] = HeadCell;