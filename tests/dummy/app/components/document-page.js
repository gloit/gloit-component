import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
  classNames: ['document-page'],
  url: null,
  body: null,

  didInsertElement: function() {
    var self = this;

    if (this.get('url')) {
      ajax({
        url: this.get('url')
      }).then(function(result) {
        self.set('body', result);
      });
    }
  }
});
