"use strict";
var HeadCell = require("./gl-head-cell")["default"] || require("./gl-head-cell");
var layout = require("../../templates/gl-table/gl-select-all-cell")["default"] || require("../../templates/gl-table/gl-select-all-cell");
var SelectAllCell;

SelectAllCell = HeadCell.extend({
  layout: layout,
  content: Ember.Object.create({
    width: 30,
    textAlign: 'center'
  }),
  checkedDidChange: (function() {
    var action;
    action = this.get('checked') ? 'selectAll' : 'deselectAll';
    return this.triggerAction({
      action: action
    });
  }).observes('checked')
});

exports["default"] = SelectAllCell;