`import styleBindings from '../../mixins/style-bindings'`

Cell = Ember.Component.extend styleBindings,
  tagName: 'td'
  classNames: ['gc-table-cell']
  styleBindings: ['textAlign:text-align']

  textAlignBinding: 'column.textAlign'

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.value", options)

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
