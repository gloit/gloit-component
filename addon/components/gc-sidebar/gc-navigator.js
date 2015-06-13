import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gc-navigator'],

  menus: [],

  didInsertElement: function() {
    var height = this.$().parent().height() - 60 - 90;
    this.$().height(height);

    var triggersHeight = this.get('menus.length') * 50 + 30;
    this.$('.menu-items').height(height - triggersHeight);
  },

  actions: {
    triggerMenu: function(menu) {
      this.triggerAction({ action: 'triggerMenu', actionContext: menu });
    }
  }

});
