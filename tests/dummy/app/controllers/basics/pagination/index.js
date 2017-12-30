import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    page: function(page) {
      swal(Ember.String.fmt("Page %@ is clicked.", page));
    }
  }
});
