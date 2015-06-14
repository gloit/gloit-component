import Ember from 'ember';

import HeadRow from './gc-head-row';

export default Ember.CollectionView.extend({
  tagName: 'thead',
  classNames: ['gc-table-head'],
  itemViewClass: HeadRow,
  hasIndexCell: false,
  hasSelectAllCell: false
});
