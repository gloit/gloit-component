import Ember from 'ember';

import Action from './gc-table/gc-action';
import Topbar from './gc-table/gc-topbar';
import Head from './gc-table/gc-head';
import Body from './gc-table/gc-body';

export default Ember.Component.extend({
  topbarView: Topbar,
  headView: Head,
  bodyView: Body,
  init: function() {
    this._super();
    if (Ember.isNone(this.get('selection'))) {
      return this.set('selection', Ember.ArrayProxy.createWithMixins(Ember.MutableArray, {
        content: Ember.A()
      }));
    }
  },
  tagName: 'table',
  classNames: ['table', 'table-bordered', 'table-hover', 'gc-table'],
  classNameBindings: ['clickable:gc-table-clickable'],
  multiple: false,
  selection: null,
  indexed: false,
  rowSelectable: false,
  topActions: [],
  hasTopActions: Ember.computed.notEmpty('topActions'),
  clickable: Ember.computed('multiple', 'rowSelectable', {
    get() {
      return !this.get('multiple') && this.get('rowSelectable');
    }
  }),
  headContent: Ember.computed('columns.@each', 'indexed', {
    get() {
      var headContent;
      headContent = Ember.A();
      headContent.pushObject(this.get('columns') || []);
      return headContent;
    }
  }),
  click: function(evt) {
    var view;
    view = Ember.View.views[evt.target.id];
    if (this._clickFromAction(view)) {
      return this.triggerAction({
        action: view.get('content.name')
      });
    }
  },
  _clickFromAction: function(target) {
    return target && target.constructor === Action;
  },
  actions: {
    selectRow: function(row) {
      this.get('selection').clear();
      this.get('selection').addObject(row.get('content'));
      return this.triggerAction({
        action: 'select',
        actionContext: row.get('content')
      });
    },
    selectAll: function() {
      return this.get('selection').addEach(this.get('content'));
    },
    deselectAll: function() {
      return this.get('selection').clear();
    }
  }
});
