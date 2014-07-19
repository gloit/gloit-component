define(
  ["./gc-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Row = __dependency1__["default"] || __dependency1__;
    var SelectableRow;

    SelectableRow = Row.extend({
      selectionBinding: 'parentView.selection',
      selected: (function(key, value) {
        if (value != null) {
          if (value) {
            this.get('selection').add(this.get('content'));
          } else {
            this.get('selection').remove(this.get('content'));
          }
          return value;
        } else {
          return this.get('selection').contains(this.get('content'));
        }
      }).property('selection.length')
    });

    __exports__["default"] = SelectableRow;
  });