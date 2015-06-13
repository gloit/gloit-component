import Ember from 'ember';

import Brand from './gc-sidebar/gc-brand';
import Navigator from './gc-sidebar/gc-navigator';
import Starter from './gc-sidebar/gc-starter';

export default Ember.Component.extend({
  brandView: Brand,
  navigatorView: Navigator,
  starterView: Starter,

  classNames: ['gc-sidebar'],
  classNameBindings: ['expanded:gc-sidebar-expanded'],

  expanded: true,
  expandable: true,

  brand: { name: 'Brand', imageUrl: null },
  menus: [],
  starterItems: [],

  actions: {
    triggerMenu: function(menu) {
      this.triggerAction({ action: 'triggerMenu', actionContext: menu });
    },

    toggle: function() {
      this.toggleProperty('expanded');
    }
  }
});

