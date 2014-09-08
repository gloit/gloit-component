`import ActionGroup from './gc-action-group'`
`import layout from '../../templates/gc-table/gc-topbar'`

Topbar = Ember.Component.extend
  actionGroupView: ActionGroup

  tagName: 'caption'
  classNames: ['gc-table-top-bar']
  layout: layout

  barActions: []
  leftActions: Ember.computed.filterBy('barActions', 'position', 'left')
  rightActions: Ember.computed.filterBy('barActions', 'position', 'right')

`export default Topbar`
