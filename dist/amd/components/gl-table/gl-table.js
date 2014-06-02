define(
  ["./gl-action","./gl-action-group","./gl-topbar","./gl-head","./gl-body","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var ActionGroup = __dependency2__["default"] || __dependency2__;
    var Topbar = __dependency3__["default"] || __dependency3__;
    var Head = __dependency4__["default"] || __dependency4__;
    var Body = __dependency5__["default"] || __dependency5__;
    var Table;

    Table = Ember.Component.extend({
      topbarView: Topbar,
      actionGroupView: ActionGroup,
      headView: Head,
      bodyView: Body,
      init: function() {
        this._super();
        if (Ember.isNone(this.get('selection'))) {
          return this.set('selection', new Ember.Set());
        }
      },
      tagName: 'table',
      classNames: ['table', 'table-bordered', 'table-hover', 'gl-table'],
      classNameBindings: ['clickable:table-clickable'],
      multiple: false,
      selection: null,
      indexed: false,
      rowSelectable: false,
      topActions: [],
      hasTopActions: Ember.computed.notEmpty('topActions'),
      clickable: (function() {
        return !this.get('multiple') && this.get('rowSelectable');
      }).property('multiple', 'rowSelectable'),
      headContent: (function() {
        var headContent;
        headContent = Ember.A();
        headContent.pushObject(this.get('columns') || []);
        return headContent;
      }).property('columns.@each', 'indexed'),
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
          this.get('selection').add(row.get('content'));
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

    __exports__["default"] = Table;
  });