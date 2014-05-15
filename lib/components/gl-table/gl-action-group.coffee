`import Action from './gl-action'`

ActionGroup = Ember.CollectionView.extend
  classNames: ['gl-table-action-group']
  itemViewClass: Action

`export default ActionGroup`
