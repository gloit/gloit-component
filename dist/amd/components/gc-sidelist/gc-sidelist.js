define(
  ["./gc-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Item = __dependency1__["default"] || __dependency1__;
    var Sidelist;

    Sidelist = Ember.CollectionView.extend({
      classNames: ['gc-sidelist'],
      itemViewClass: Item,
      didInsertElement: function() {
        this.set('height', Ember.$('.gc-sidelist').parent().height());
        return this._super();
      }
    });

    __exports__["default"] = Sidelist;
  });