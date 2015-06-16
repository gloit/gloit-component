import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gc-login-form'],

  title: '用户登录',
  copyright: Ember.computed({
    get: function() {
      return Ember.String.fmt('&copy; 2011-%@', new Date().getYear() + 1900);
    }
  }),
  version: 'v1.0.0',

  registerable: false,

  // Default handler of sign in
  action: 'authenticate',

  titleHtmlSafe: Ember.computed('title', {
    get: function() {
      return Ember.String.htmlSafe(this.get('title'));
    }
  }),

  copyrightHtmlSafe: Ember.computed('copyright', {
    get: function() {
      return Ember.String.htmlSafe(this.get('copyright'));
    }
  }),

  didInsertElement: function() {
    Ember.$('input#identification').focus();
  },

  actions: {
    login: function() {
      this.sendAction('action', this.get('identification'), this.get('password'));
    }
  }
});
