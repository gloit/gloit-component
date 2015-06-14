import Ember from 'ember';

import Action from './gc-action';

export default Ember.CollectionView.extend({
  classNames: ['gc-table-action-group'],
  itemViewClass: Action
});
