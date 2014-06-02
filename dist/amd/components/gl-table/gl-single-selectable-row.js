define(
  ["./gl-selectable-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var SelectableRow = __dependency1__["default"] || __dependency1__;
    var SingleSelectableRow;

    SingleSelectableRow = SelectableRow.extend({
      click: function() {
        this.get('selection').clear();
        this.get('selection').add(this.get('content'));
        return this.triggerAction({
          action: 'selectRow',
          actionContext: this
        });
      }
    });

    __exports__["default"] = SingleSelectableRow;
  });