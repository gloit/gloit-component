define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var DatetimePicker;

    DatetimePicker = Ember.TextField.extend({
      resetable: true,
      format: 'yyyy-mm-dd hh:ii',
      autoclose: true,
      todayBtn: false,
      startDate: '1949-10-01',
      minuteStep: 10,
      minView: 0,
      maxView: 4,
      language: 'zh-CN',
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
    });

    __exports__["default"] = DatetimePicker;
  });