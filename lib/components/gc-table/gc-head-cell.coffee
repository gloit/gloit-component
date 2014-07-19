`import styleBindings from '../../mixins/style-bindings'`

HeadCell = Ember.Component.extend styleBindings,
  tagName: 'td'
  classNames: ['gc-table-head-cell']
  styleBindings: ['minWidth:min-width', 'textAlign:text-align']

  minWidthBinding: 'content.width'
  textAlignBinding: 'content.textAlign'

  defaultTemplate: (context, options) ->
    options =  data: options.data, hash: {}
    Ember.Handlebars.helpers.bind.call(context, "view.content.title", options)

`export default HeadCell`
