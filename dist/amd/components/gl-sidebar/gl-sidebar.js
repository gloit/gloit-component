define(
  ["./gl-brand","./gl-navigator","./gl-Starter","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Brand = __dependency1__["default"] || __dependency1__;
    var Navigator = __dependency2__["default"] || __dependency2__;
    var Starter = __dependency3__["default"] || __dependency3__;
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

    __exports__["default"] = Sidebar;
  });