define(
  ["../../mixins/style-bindings","../../templates/gc-table/gc-head-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var HeadCell;

    HeadCell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gc-table-head-cell'],
      styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
      minWidthBinding: 'content.width',
      textAlignBinding: 'content.textAlign',
      layout: layout
    });

    __exports__["default"] = HeadCell;
  });