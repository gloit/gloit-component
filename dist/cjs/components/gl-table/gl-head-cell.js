"use strict";
var styleBindings = require("../../mixins/style-bindings")["default"] || require("../../mixins/style-bindings");
var HeadCell;

HeadCell = Ember.Component.extend(styleBindings, {
  tagName: 'td',
  classNames: ['gl-table-head-cell'],
  styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
  minWidthBinding: 'content.width',
  textAlignBinding: 'content.textAlign',
  defaultTemplate: function(context, options) {
    options = {
      data: options.data,
      hash: {}
    };
    return Ember.Handlebars.helpers.bind.call(context, "view.content.title", options);
  }
});

exports["default"] = HeadCell;