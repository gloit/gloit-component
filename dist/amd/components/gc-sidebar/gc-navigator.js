define(
  ["../../templates/gc-sidebar/gc-navigator","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Navigator;

    Navigator = Ember.Component.extend({
      classNames: ['gc-navigator'],
      layout: layout,
      menus: [],
      didInsertElement: function() {
        var height, triggersHeight;
        height = this.$().parent().height() - 60 - 90;
        this.$().height(height);
        triggersHeight = this.get('menus.length') * 50 + 30;
        return this.$('.menu-items').height(height - triggersHeight);
      },
      actions: {
        triggerMenu: function(menu) {
          return this.triggerAction({
            action: 'triggerMenu',
            actionContext: menu
          });
        }
      }
    });

    __exports__["default"] = Navigator;
  });