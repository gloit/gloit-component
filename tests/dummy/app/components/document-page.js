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
      console.log(config);
      ajax({
        url: Ember.String.fmt('%@%@', config.baseUrl, this.get('url'))
      }).then(function(result) {
        self.set('body', result);
      });
    }
  }
});
