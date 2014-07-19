`import Action from './gc-action'`

ActionGroup = Ember.CollectionView.extend
  classNames: ['gc-table-action-group']
  itemViewClass: Action

`export default ActionGroup`
