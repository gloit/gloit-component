import Ember from 'ember';

import Row from './gc-row';

export default Row.extend({
  selectionBinding: 'parentView.selection',
  selected: Ember.computed('selection.length', function(key, value) {
    if (value != null) {
      if (value) {
        this.get('selection').addObject(this.get('content'));
      } else {
        this.get('selection').removeObject(this.get('content'));
      }
      return value;
    } else {
      return this.get('selection').contains(this.get('content'));
    }
  })
});
