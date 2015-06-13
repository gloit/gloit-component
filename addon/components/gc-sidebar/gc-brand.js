import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gc-brand'],
  name: 'Brand',
  imageUrl: null,

  logo: Ember.computed('name', 'imageUrl', {
    get() {
      if (this.get('imageUrl')) {
        return Ember.String.htmlSafe(Ember.String.fmt("<img src='%@' />", this.get('imageUrl')));
      }

      return this.get('name');
    }
  }),

  toggleSidebar: 'toggle',

  sidebarExpandable: true,

  actions: {
    toggleSidebar: function() {
      this.sendAction('toggleSidebar');
    }
  }
});
