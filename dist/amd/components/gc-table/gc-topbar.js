define(
  ["./gc-action-group","../../templates/gc-table/gc-topbar","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var ActionGroup = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Topbar;

    Topbar = Ember.Component.extend({
      actionGroupView: ActionGroup,
      tagName: 'caption',
      classNames: ['gc-table-top-bar'],
      layout: layout,
      barActions: [],
      leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
      rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
    });

    __exports__["default"] = Topbar;
  });