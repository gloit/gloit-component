`import Row from './gl-row'`
`import MultipleSelectableRow from './gl-multiple-selectable-row'`
`import SingleSelectableRow from './gl-single-selectable-row'`

Body = Ember.CollectionView.extend
  tagName: 'tbody'
  classNames: ['gl-table-body']

  itemViewClass: (->
    return Row unless @get('rowSelectable')

    if @get('multiple')
      MultipleSelectableRow
    else
      SingleSelectableRow
  ).property('rowSelectable', 'multiple')

  indexed: false
  multiple: false
  rowSelectable: false

  # 保存被选中的行绑定的对象
  selection: null

  columns: []

  single: (->
    !@get('multiple') && @get('rowSelectable')
  ).property('multiple', 'rowSelectable')

`export default Body`
