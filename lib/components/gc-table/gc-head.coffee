`import HeadRow from './gc-head-row'`

Head = Ember.CollectionView.extend
  tagName: 'thead'
  classNames: ['gc-table-head']
  itemViewClass: HeadRow

  hasIndexCell: false
  hasSelectAllCell: false

`export default Head`
