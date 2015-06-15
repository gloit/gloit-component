import Ember from 'ember';

import FormGroupComponent from 'ember-idx-forms/group';
import ControlMixin from 'ember-idx-forms/mixins/control';

export default FormGroupComponent.extend({
  classNames: ['gc-datetimepicker'],

  controlView: Ember.TextField.extend(ControlMixin, {
    placeholder: Ember.computed.alias('parentView.placeholder'),
    attributeBindings: ['placeholder', 'required', 'autofocus', 'disabled'],
    required: Ember.computed.alias('parentView.required'),
    autofocus: Ember.computed.alias('parentView.autofocus'),
    disabled: Ember.computed.alias('parentView.disabled'),
    type: Ember.computed.alias('parentView.type'),
    model: Ember.computed.alias('parentView.model'),
    propertyName: Ember.computed.alias('parentView.propertyName'),

    // Datetimepicker options
    format: Ember.computed.alias('parentView.format'),
    autoclose: Ember.computed.alias('parentView.autoclose'),
    todayBtn: Ember.computed.alias('parentView.todayBtn'),
    startDate: Ember.computed.alias('parentView.startDate'),
    minuteStep: Ember.computed.alias('parentView.minuteStep'),
    minView: Ember.computed.alias('parentView.minView'),
    maxView: Ember.computed.alias('parentView.maxView'),
    language: Ember.computed.alias('parentView.language'),

    didInsertElement: function() {
      var options;
      options = {
        format: this.get('format'),
        autoclose: this.get('autoclose'),
        todayBtn: this.get('todayBtn'),
        startDate: this.get('startDate'),
        minuteStep: this.get('minuteStep'),
        minView: this.get('minView'),
        maxView: this.get('maxView'),
        language: this.get('language')
      };
      return this.$().datetimepicker(options);
    }
  }),

  resetable: true,
  format: 'yyyy-mm-dd hh:ii',
  autoclose: true,
  todayBtn: false,
  startDate: '1949-10-01',
  minuteStep: 10,
  minView: 0,
  maxView: 4,
  language: 'zh-CN',

  property: void 0,
  label: void 0,
  placeholder: void 0,
  required: void 0,
  autofocus: void 0,
  disabled: void 0,
  controlWrapper: Ember.computed('form.form_layout', function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  })

});
