define(
  ["./gc-head-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var HeadRow = __dependency1__["default"] || __dependency1__;
    var Head;

    Head = Ember.CollectionView.extend({
      tagName: 'thead',
      classNames: ['gc-table-head'],
      itemViewClass: HeadRow,
      hasIndexCell: false,
      hasSelectAllCell: false
    });

    __exports__["default"] = Head;
  });