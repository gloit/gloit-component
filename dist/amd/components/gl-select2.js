define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var Select2;

    Select2 = Ember.Select.extend({
      classNames: ['gl-select2'],
      placeholder: '请选择...',
      allowClear: true,
      closeOnSelect: true,
      minimumInputLength: 0,
      maximumSelectionSize: 0,
      selectedDidChange: (function() {
        return this.$().select2('val', this.$().val());
      }).observes('selection.@each'),
      didInsertElement: function() {
        return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
      },
      processChildElements: function() {
        var options;
        options = {};
        options.placeholder = this.get('prompt') || this.get('placeholder');
        options.allowClear = this.get('allowClear');
        options.closeOnSelect = this.get('closeOnSelect');
        options.minimumInputLength = this.get('minimumInputLength');
        options.maximumSelectionSize = this.get('maximumSelectionSize');
        return this.$().select2(options);
      },
      willDestroyElement: function() {
        return this.$().select2('destroy');
      }
    });

    __exports__["default"] = Select2;
  });