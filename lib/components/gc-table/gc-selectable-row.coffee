`import Row from './gc-row'`

SelectableRow = Row.extend
  selectionBinding: 'parentView.selection'

  selected: ((key, value) ->
    if value?
      if value
        @get('selection').add(@get('content'))
      else
        @get('selection').remove(@get('content'))

      value
    else
      @get('selection').contains(@get('content'))
  ).property('selection.length')

`export default SelectableRow`
