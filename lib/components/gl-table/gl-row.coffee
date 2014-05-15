`import Cell from './gl-cell'`
`import layout from '../../templates/gl-table/gl-row'`

Row = Ember.Component.extend
  cellView: Cell

  tagName: 'tr'
  layout: layout

  classNames: ['gl-table-row']
  classNameBindings: ['selected:info']

  indexedBinding: 'parentView.indexed'
  columnsBinding: 'parentView.columns'

  index: (->
    @get('contentIndex') + 1
  ).property('contentIndex')

`export default Row`
