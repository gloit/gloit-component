`import SelectableRow from './gc-selectable-row'`
`import layout from '../../templates/gc-table/gc-multiple-selectable-row'`

MultipleSelectableRow = SelectableRow.extend
  layout: layout

  multipleBinding: 'parentView.multiple'

`export default MultipleSelectableRow`
