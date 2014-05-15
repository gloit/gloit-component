`import HeadCell from './gl-head-cell'`
`import layout from '../../templates/gl-table/gl-select-all-cell'`

SelectAllCell = HeadCell.extend
  layout: layout
  content: Ember.Object.create(width: 30, textAlign: 'center')

  checkedDidChange: (->
    action = if @get('checked') then 'selectAll' else 'deselectAll'
    @triggerAction action: action
  ).observes('checked')

`export default SelectAllCell`
