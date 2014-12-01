define(
  ["../../templates/gc-sidelist/gc-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Item;

    Item = Ember.Component.extend({
      classNames: ['gc-sidelist-item'],
      layout: layout
    });

    __exports__["default"] = Item;
  });