import Ember from 'ember';

import ActionGroup from './gc-action-group';

export default Ember.Component.extend({
  layoutName: 'components/gc-table/gc-topbar',
  actionGroupView: ActionGroup,
  tagName: 'caption',
  classNames: ['gc-table-top-bar'],
  barActions: [],
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
});
