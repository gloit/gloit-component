define(
  ["./gc-action","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var ActionGroup;

    ActionGroup = Ember.CollectionView.extend({
      classNames: ['gc-table-action-group'],
      itemViewClass: Action
    });

    __exports__["default"] = ActionGroup;
  });