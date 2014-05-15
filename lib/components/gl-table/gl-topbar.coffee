Topbar = Ember.Component.extend
  tagName: 'caption'
  classNames: ['gl-table-top-bar']

  barActions: []
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left')
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')

`export default Topbar`
