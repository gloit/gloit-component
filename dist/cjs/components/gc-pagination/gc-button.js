"use strict";
var layout = require("../../templates/gc-pagination/gc-button")["default"] || require("../../templates/gc-pagination/gc-button");
var PaginationButton;

PaginationButton = Ember.Component.extend({
  tagName: 'li',
  layout: layout,
  classNameBindings: ['disabled:disabled', 'active:active'],
  currentBinding: 'parentView.current',
  disabled: (function() {
    var page;
    page = this.get('content.page');
    return page !== this.get('content.text') && page === this.get('current');
  }).property('current', 'content.{page, text}'),
  active: (function() {
    var page;
    page = this.get('content.page');
    return page === this.get('content.text') && page === this.get('current');
  }).property('current', 'content.{page,text}'),
  actions: {
    page: function(page) {
      return this.triggerAction({
        action: 'page',
        actionContext: page
      });
    }
  }
});

exports["default"] = PaginationButton;