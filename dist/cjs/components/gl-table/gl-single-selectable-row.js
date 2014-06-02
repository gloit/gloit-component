"use strict";
var SelectableRow = require("./gl-selectable-row")["default"] || require("./gl-selectable-row");
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

exports["default"] = SingleSelectableRow;