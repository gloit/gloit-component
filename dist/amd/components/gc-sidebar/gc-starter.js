define(
  ["../../templates/gc-sidebar/gc-starter","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Starter;

    Starter = Ember.Component.extend({
      layout: layout,
      classNames: ['gc-starter', 'dropdown'],
      items: []
    });

    __exports__["default"] = Starter;
  });