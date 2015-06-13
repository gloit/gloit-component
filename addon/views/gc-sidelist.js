import ListView from 'ember-list-view';
import Item from './gc-sidelist/gc-item';

export default ListView.extend({
  classNames: ['gc-sidelist'],

  itemViewClass: Item,

  didInsertElement: function() {
    this.set('height', Ember.$('.gc-sidelist').parent().height());
    this._super();
  }
});
