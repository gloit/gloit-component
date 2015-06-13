import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    triggerMenu: function(menu) {
      this.transitionTo(menu.items.get('firstObject.route'));
    }
  }
});
