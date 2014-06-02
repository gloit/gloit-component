"use strict";
var layout = require("../../templates/gl-sidebar/gl-brand")["default"] || require("../../templates/gl-sidebar/gl-brand");
var Brand;

Brand = Ember.Component.extend({
  classNames: ['gl-brand'],
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