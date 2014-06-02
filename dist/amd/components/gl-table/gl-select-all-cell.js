define(
  ["./gl-head-cell","../../templates/gl-table/gl-select-all-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HeadCell = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var SelectAllCell;

    SelectAllCell = HeadCell.extend({
      layout: layout,
      content: Ember.Object.create({
        width: 30,
        textAlign: 'center'
      }),
      checkedDidChange: (function() {
        var action;
        action = this.get('checked') ? 'selectAll' : 'deselectAll';
        return this.triggerAction({
          action: action
        });
      }).observes('checked')
    });

    __exports__["default"] = SelectAllCell;
  });