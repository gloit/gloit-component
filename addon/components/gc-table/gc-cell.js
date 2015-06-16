import Ember from 'ember';

import styleBindings from '../../mixins/style-bindings';

export default Ember.Component.extend(styleBindings, {
  tagName: 'td',
  classNames: ['gc-table-cell'],
  styleBindings: ['textAlign:text-align'],

  textAlignBinding: 'column.textAlign',

  layoutName: 'components/gc-table/gc-cell',

  init: function() {
    this.valuePathDidChange();

    this._super();
  },

  valuePathDidChange: Ember.observer('row', 'column.cellContentPath', function() {
    var formatValue = this.get('column.formatCellContent');
    var valuePath = 'row.' + this.get('column.cellContentPath');

    Ember.defineProperty(this, 'value', Ember.computed(valuePath, {
      get: function() {
        return formatValue ? formatValue.call(this, this.get(valuePath)) : this.get(valuePath);
      }
    }));
  })

});
