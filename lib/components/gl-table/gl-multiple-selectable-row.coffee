`import SelectableRow from './gl-selectable-row'`
`import layout from '../../templates/gl-table/gl-multiple-selectable-row'`

MultipleSelectableRow = SelectableRow.extend
  layout: layout

  multipleBinding: 'parentView.multiple'

`export default MultipleSelectableRow`
