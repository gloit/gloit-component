import Ember from 'ember';
import ajax from 'ic-ajax';

import config from '../config/environment';

export default Ember.Component.extend({
  classNames: ['document-page'],
  url: null,
  body: null,

  didInsertElement: function() {
    var self = this;

    if (this.get('url')) {
      var url = this.get('url');

      if (config.environment === 'production') {
        url = Ember.String.fmt('/gloit-component%@', this.get('url'));
      }

      ajax({
        url: url
      }).then(function(result) {
        self.set('body', result);
      });
    }
  }
});
