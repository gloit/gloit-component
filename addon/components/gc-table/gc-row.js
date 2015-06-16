import Ember from 'ember';

import Cell from './gc-cell';

export default Ember.Component.extend({
  layoutName: 'components/gc-table/gc-row',
  cellView: Cell,
  tagName: 'tr',
  classNames: ['gc-table-row'],
  classNameBindings: ['selected:info'],
  indexedBinding: 'parentView.indexed',
  columnsBinding: 'parentView.columns',
  index: Ember.computed('contentIndex', {
    get: function() {
      return this.get('contentIndex') + 1;
    }
  })
});
