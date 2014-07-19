"use strict";
var Brand = require("./gc-brand")["default"] || require("./gc-brand");
var Navigator = require("./gc-navigator")["default"] || require("./gc-navigator");
var Starter = require("./gc-Starter")["default"] || require("./gc-Starter");
var Sidebar;

Sidebar = Ember.Component.extend({
  brandView: Brand,
  navigatorView: Navigator,
  starterView: Starter,
  classNames: ['gc-sidebar'],
  classNameBindings: ['expanded:gc-sidebar-expanded'],
  expanded: true,
  expandable: true,
  brand: {
    name: 'Brand',
    imageUrl: null
  },
  menus: [],
  starterItems: [],
  actions: {
    triggerMenu: function(menu) {
      return this.triggerAction({
        action: 'triggerMenu',
        actionContext: menu
      });
    }
  }
});

exports["default"] = Sidebar;