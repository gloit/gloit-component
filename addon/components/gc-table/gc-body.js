import Ember from 'ember';

import Row from './gc-row';
import MultipleSelectableRow from './gc-multiple-selectable-row';
import SingleSelectableRow from './gc-single-selectable-row';

export default Ember.CollectionView.extend({
  tagName: 'tbody',
  classNames: ['gc-table-body'],

  itemViewClass: Ember.computed('rowSelectable', 'multiple', {
    get: function() {
      if (!this.get('rowSelectable')) {
        return Row;
      }

      if (this.get('multiple')) {
        return MultipleSelectableRow;
      } else {
        return SingleSelectableRow;
      }
    }
  }),

  indexed: false,
  multiple: false,
  rowSelectable: false,

  // 保存被选中的行绑定的对象
  selection: null,

  columns: [],

  single: Ember.computed('rowSelectable', 'multiple', {
    get: function() {
      return !this.get('multiple') && this.get('rowSelectable');
    }
  })
  
});
