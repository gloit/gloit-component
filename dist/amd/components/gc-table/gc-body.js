define(
  ["./gc-row","./gc-multiple-selectable-row","./gc-single-selectable-row","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Row = __dependency1__["default"] || __dependency1__;
    var MultipleSelectableRow = __dependency2__["default"] || __dependency2__;
    var SingleSelectableRow = __dependency3__["default"] || __dependency3__;
    var Body;

    Body = Ember.CollectionView.extend({
      tagName: 'tbody',
      classNames: ['gc-table-body'],
      itemViewClass: (function() {
        if (!this.get('rowSelectable')) {
          return Row;
        }
        if (this.get('multiple')) {
          return MultipleSelectableRow;
        } else {
          return SingleSelectableRow;
        }
      }).property('rowSelectable', 'multiple'),
      indexed: false,
      multiple: false,
      rowSelectable: false,
      selection: null,
      columns: [],
      single: (function() {
        return !this.get('multiple') && this.get('rowSelectable');
      }).property('multiple', 'rowSelectable')
    });

    __exports__["default"] = Body;
  });