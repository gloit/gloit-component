define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var ColumnModel;

    ColumnModel = Ember.Object.extend({
      title: void 0,
      width: 100,
      textAlign: 'left',
      cellContentPath: void 0,
      formatCellContent: void 0
    });

    __exports__["default"] = ColumnModel;
  });