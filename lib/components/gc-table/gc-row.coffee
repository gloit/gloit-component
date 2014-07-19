`import Cell from './gc-cell'`
`import layout from '../../templates/gc-table/gc-row'`

Row = Ember.Component.extend
  cellView: Cell

  tagName: 'tr'
  layout: layout

  classNames: ['gc-table-row']
  classNameBindings: ['selected:info']

  indexedBinding: 'parentView.indexed'
  columnsBinding: 'parentView.columns'

  index: (->
    @get('contentIndex') + 1
  ).property('contentIndex')

`export default Row`
