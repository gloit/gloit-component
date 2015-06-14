import SelectableRow from './gc-selectable-row';

export default SelectableRow.extend({
  click: function() {
    this.get('selection').clear();
    this.get('selection').addObject(this.get('content'));
    return this.triggerAction({
      action: 'selectRow',
      actionContext: this
    });
  }
});
