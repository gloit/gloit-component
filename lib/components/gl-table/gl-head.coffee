`import HeadRow from './gl-head-row'`

Head = Ember.CollectionView.extend
  tagName: 'thead'
  classNames: ['gl-table-head']
  itemViewClass: HeadRow

  hasIndexCell: false
  hasSelectAllCell: false

`export default Head`
