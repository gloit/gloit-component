define(
  ["../../mixins/style-bindings","../../templates/gc-table/gc-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Cell;

    Cell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gc-table-cell'],
      styleBindings: ['textAlign:text-align'],
      textAlignBinding: 'column.textAlign',
      layout: layout,
      init: function() {
        this.valuePathDidChange();
        return this._super();
      },
      valuePathDidChange: (function() {
        var formatValue, valuePath;
        formatValue = this.get('column.formatCellContent');
        valuePath = 'row.' + this.get('column.cellContentPath');
        if (!valuePath) {
          return;
        }
        return Ember.defineProperty(this, 'value', Ember.computed(function() {
          if (formatValue) {
            return formatValue.call(this, this.get(valuePath));
          } else {
            return this.get(valuePath);
          }
        }).property(valuePath));
      }).observes('row', 'column.cellContentPath')
    });

    __exports__["default"] = Cell;
  });