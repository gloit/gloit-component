"use strict";
var styleBindings = require("../../mixins/style-bindings")["default"] || require("../../mixins/style-bindings");
var Cell;

Cell = Ember.Component.extend(styleBindings, {
  tagName: 'td',
  classNames: ['gl-table-cell'],
  styleBindings: ['textAlign:text-align'],
  textAlignBinding: 'column.textAlign',
  defaultTemplate: function(context, options) {
    options = {
      data: options.data,
      hash: {}
    };
    debugger;
    return Ember.Handlebars.helpers.bind.call(context, "view.value", options);
  },
  init: function() {
    this.valuePathDidChange();
    return this._super();
  },
  valuePathDidChange: (function() {
    var formatValue, valuePath;
    formatValue = this.get('column.formatCellContent');
    valuePath = 'row.' + this.get('column.cellContentPath');
    if (!valuePath) {
      return;
    }
    return Ember.defineProperty(this, 'value', Ember.computed(function() {
      if (formatValue) {
        return formatValue.call(this, this.get(valuePath));
      } else {
        return this.get(valuePath);
      }
    }).property(valuePath));
  }).observes('row', 'column.cellContentPath')
});

exports["default"] = Cell;