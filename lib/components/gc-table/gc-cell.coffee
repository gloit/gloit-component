`import styleBindings from '../../mixins/style-bindings'`
`import layout from '../../templates/gc-table/gc-cell'`

Cell = Ember.Component.extend styleBindings,
  tagName: 'td'
  classNames: ['gc-table-cell']
  styleBindings: ['textAlign:text-align']

  textAlignBinding: 'column.textAlign'

  layout: layout,

  init: ->
    @valuePathDidChange()

    @_super()

  valuePathDidChange: (->
    formatValue = @get('column.formatCellContent')
    valuePath = 'row.' + @get('column.cellContentPath')

    return unless valuePath

    Ember.defineProperty(@, 'value', Ember.computed(->
      if formatValue then formatValue.call(@, @get(valuePath)) else @get(valuePath)
    ).property(valuePath))
  ).observes('row', 'column.cellContentPath')

`export default Cell`
