"use strict";
var layout = require("../../templates/gc-sidebar/gc-brand")["default"] || require("../../templates/gc-sidebar/gc-brand");
var Brand;

Brand = Ember.Component.extend({
  classNames: ['gc-brand'],
  layout: layout,
  name: 'Brand',
  imageUrl: null,
  logo: (function() {
    if (this.get('imageUrl')) {
      return ("<img src='" + (this.get('imageUrl')) + "' />").htmlSafe();
    }
    return this.get('name');
  }).property('name', 'imageUrl'),
  sidebarExpandable: true
});

exports["default"] = Brand;