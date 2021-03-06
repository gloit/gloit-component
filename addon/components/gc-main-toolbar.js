import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gc-main-toolbar'],

  parentItems: Ember.computed('items.@each', {
    get: function() {
      if (!Ember.isEmpty(this.get('items'))) {
        return this.get('items').slice(0, this.get('items.length') - 1);
      }
    }
  }),

  activeItem: Ember.computed('items.@each', {
    get: function() {
      return this.get('items.lastObject');
    }
  })
});
