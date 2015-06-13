import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    page: function(page) {
      alert(Ember.String.fmt("Page %@ is clicked.", page));
    }
  }
});
