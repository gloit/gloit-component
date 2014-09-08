`import styleBindings from '../../mixins/style-bindings'`
`import layout from '../../templates/gc-table/gc-head-cell'`

HeadCell = Ember.Component.extend styleBindings,
  tagName: 'td'
  classNames: ['gc-table-head-cell']
  styleBindings: ['minWidth:min-width', 'textAlign:text-align']

  minWidthBinding: 'content.width'
  textAlignBinding: 'content.textAlign'

  layout: layout

`export default HeadCell`
