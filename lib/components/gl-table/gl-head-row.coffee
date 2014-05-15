`import HeadCell from './gl-head-cell'`
`import SelectAllCell from './gl-select-all-cell'`

HeadRow = Ember.CollectionView.extend
  tagName: 'tr'
  classNames: ['gl-table-head-row']
  itemViewClass: HeadCell

  hasIndexCellBinding: 'parentView.hasIndexCell'
  hasSelectAllCellBinding: 'parentView.hasSelectAllCell'

  didInsertElement: ->
    @_createIndexCell() if @get('hasIndexCell')
    @_createSelectAllCell() if @get('hasSelectAllCell')

  _createIndexCell: ->
    @.unshiftObject HeadCell.create
      content: Ember.Object.create(width: 30, textAlign: 'center', title: '#')

  _createSelectAllCell: ->
    @.unshiftObject SelectAllCell.create()

`export default HeadRow`
