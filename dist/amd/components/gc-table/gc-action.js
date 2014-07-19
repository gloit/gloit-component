define(
  ["../../templates/gc-table/gc-action","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Action;

    Action = Ember.Component.extend({
      tagName: 'a',
      layout: layout
    });

    __exports__["default"] = Action;
  });