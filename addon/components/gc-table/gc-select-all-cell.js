import Ember from 'ember';

import HeadCell from './gc-head-cell';

export default HeadCell.extend({
  layoutName: 'components/gc-table/gc-select-all-cell',
  content: Ember.Object.create({
    width: 30,
    textAlign: 'center'
  }),
  checkedDidChange: Ember.observer('checked', function() {
    var action;
    action = this.get('checked') ? 'selectAll' : 'deselectAll';
    return this.triggerAction({
      action: action
    });
  })
});
