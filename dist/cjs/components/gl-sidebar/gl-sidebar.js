"use strict";
var Brand = require("./gl-brand")["default"] || require("./gl-brand");
var Navigator = require("./gl-navigator")["default"] || require("./gl-navigator");
var Starter = require("./gl-Starter")["default"] || require("./gl-Starter");
var Sidebar;

Sidebar = Ember.Component.extend({
  brandView: Brand,
  navigatorView: Navigator,
  starterView: Starter,
  classNames: ['gl-sidebar'],
  classNameBindings: ['expanded:gl-sidebar-expanded'],
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