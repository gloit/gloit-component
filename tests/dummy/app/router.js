import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('basics', function() {
    this.route('login-form', function() {
      this.route('demo');
      this.route('doc');
    });

    this.route('sidebar', function() {
      this.route('demo');
      this.route('doc');
    });

    this.route('sidelist', function() {
      this.route('demo');
      this.route('doc');
    });

    this.route('pagination', function() {
      this.route('demo');
      this.route('doc');
    });
  });
});

export default Router;
