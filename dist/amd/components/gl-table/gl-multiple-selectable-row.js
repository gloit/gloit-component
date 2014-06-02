define(
  ["./gl-selectable-row","../../templates/gl-table/gl-multiple-selectable-row","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var SelectableRow = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var MultipleSelectableRow;

    MultipleSelectableRow = SelectableRow.extend({
      layout: layout,
      multipleBinding: 'parentView.multiple'
    });

    __exports__["default"] = MultipleSelectableRow;
  });