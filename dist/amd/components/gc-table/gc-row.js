define(
  ["./gc-cell","../../templates/gc-table/gc-row","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Cell = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Row;

    Row = Ember.Component.extend({
      cellView: Cell,
      tagName: 'tr',
      layout: layout,
      classNames: ['gc-table-row'],
      classNameBindings: ['selected:info'],
      indexedBinding: 'parentView.indexed',
      columnsBinding: 'parentView.columns',
      index: (function() {
        return this.get('contentIndex') + 1;
      }).property('contentIndex')
    });

    __exports__["default"] = Row;
  });