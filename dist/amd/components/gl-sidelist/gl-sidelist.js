define(
  ["./gl-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Item = __dependency1__["default"] || __dependency1__;
    var Sidelist;

    Sidelist = Ember.ListView.extend({
      classNames: ['gl-sidelist'],
      itemViewClass: Item,
      didInsertElement: function() {
        this.set('height', Ember.$('.gl-sidelist').parent().height());
        return this._super();
      }
    });

    __exports__["default"] = Sidelist;
  });