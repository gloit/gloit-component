import Em from 'ember';
import Select2Component from 'ember-select-2/components/select-2';
import FormGroupComponent from 'ember-idx-forms/group';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default FormGroupComponent.extend({
  controlView: Select2Component.extend(ControlMixin, {
    attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled'],
    placeholder: Em.computed.alias('parentView.placeholder'),
    required: Em.computed.alias('parentView.required'),
    autofocus: Em.computed.alias('parentView.autofocus'),
    disabled: Em.computed.alias('parentView.disabled'),
    type: Em.computed.alias('parentView.type'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),

    // Select2 options
    content: Em.computed.alias('parentView.content'),
    optionLabelPath: Em.computed.alias('parentView.optionLabelPath'),
    optionDescriptionPath: Em.computed.alias('parentView.optionDescriptionPath'),
    optionValuePath: Em.computed.alias('parentView.optionValuePath'),
    typeaheadSearchingText: Em.computed.alias('parentView.typeaheadSearchingText'),
    typeaheadNoMatchesText: Em.computed.alias('parentView.typeaheadNoMatchesText'),
    allowClear: Em.computed.alias('parentView.allowClear')
  }),

  content: void 0,
  optionLabelPath: void 0,
  optionDescriptionPath: 'description',
  optionValuePath: void 0,
  typeaheadSearchingText: '搜索中...',
  typeaheadNoMatchesText: '没有可选项',
  allowClear: void 0,

  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0,
  controlWrapper: Em.computed('form.form_layout', function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  })
});
