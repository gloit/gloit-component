"use strict";
var MainToolbar;

MainToolbar = Ember.Component.extend({
  classNames: ['gl-main-toolbar'],
  parentItems: (function() {
    if (!Ember.isEmpty(this.get('items'))) {
      return this.get('items').slice(0, this.get('items.length') - 1);
    }
  }).property('items.@each'),
  activeItem: (function() {
    return this.get('items.lastObject');
  }).property('items.@each')
});

exports["default"] = MainToolbar;