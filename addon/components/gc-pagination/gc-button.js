import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  layoutName: 'components/gc-pagination/gc-button',

  classNameBindings: ['disabled:disabled', 'active:active'],

  currentBinding: 'parentView.current',

  disabled: Ember.computed('current', 'content.{page,text}', {
    get() {
      var page = this.get('content.page');
      return page !== this.get('content.text') && page === this.get('current');
    }
  }),

  active: Ember.computed('current', 'content.{page,text}', {
    get() {
      var page = this.get('content.page');
      return page === this.get('content.text') && page === this.get('current');
    }
  }),

  actions: {
    page: function(page) {
      this.triggerAction({ action: 'page', actionContext: page });
    }
  }
});
