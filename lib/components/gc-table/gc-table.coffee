`import Action from './gc-action'`
`import Topbar from './gc-topbar'`
`import Head from './gc-head'`
`import Body from './gc-body'`

Table= Ember.Component.extend
  topbarView: Topbar
  headView: Head
  bodyView: Body

  init: ->
    @_super()
    @set 'selection', new Ember.Set() if Ember.isNone(@get('selection'))

  tagName: 'table'
  classNames: ['table', 'table-bordered', 'table-hover', 'gc-table']
  classNameBindings: ['clickable:table-clickable']

  # 标记是否可以多选
  multiple: false

  # 缓存所有选中的行绑定的对象
  selection: null

  # 标记是否需要在第一列显示序号
  indexed: false

  # 标记是否可以选择行
  rowSelectable: false

  topActions: []
  hasTopActions: Ember.computed.notEmpty('topActions')

  clickable: (->
    !@get('multiple') && @get('rowSelectable')
  ).property('multiple', 'rowSelectable')

  headContent: (->
    headContent = Ember.A()
    headContent.pushObject(@get('columns') || [])
    headContent
  ).property('columns.@each', 'indexed')

  click: (evt) ->
    view = Ember.View.views[evt.target.id]
    return @triggerAction action: view.get('content.name') if @_clickFromAction(view)

  _clickFromAction: (target) ->
    target && target.constructor == Action

  actions:
    selectRow: (row) ->
      @get('selection').clear()
      @get('selection').add(row.get('content'))
      @triggerAction action: 'select', actionContext: row.get('content')

    selectAll: ->
      @get('selection').addEach(@get('content'))

    deselectAll: ->
      @get('selection').clear()

`export default Table`
