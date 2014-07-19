`import HeadCell from './gc-head-cell'`
`import layout from '../../templates/gc-table/gc-select-all-cell'`

SelectAllCell = HeadCell.extend
  layout: layout
  content: Ember.Object.create(width: 30, textAlign: 'center')

  checkedDidChange: (->
    action = if @get('checked') then 'selectAll' else 'deselectAll'
    @triggerAction action: action
  ).observes('checked')

`export default SelectAllCell`
