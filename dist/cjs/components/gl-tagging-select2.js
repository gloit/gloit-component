"use strict";
var TaggingSelect2;

TaggingSelect2 = Ember.TextField.extend({
  classNames: ['gl-tagging-select2'],
  tags: [],
  placeholder: '请选择...',
  allowClear: true,
  closeOnSelect: true,
  minimumInputLength: 0,
  maximumSelectionSize: 0,
  tokenSeparators: [",", " ", ";", "，", "；"],
  didInsertElement: function() {
    return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
  },
  processChildElements: function() {
    var options;
    options = {
      placeholder: this.get('placeholder'),
      allowClear: this.get('allowClear'),
      closeOnSelect: this.get('closeOnSelect'),
      tags: this.get('tags') || [],
      tokenSeparators: this.get('tokenSeparators'),
      minimumInputLength: this.get('minimumInputLength'),
      maximumSelectionSize: this.get('maximumSelectionSize')
    };
    return this.$().select2(options);
  },
  willDestroyElement: function() {
    return this.$().select2("destroy");
  },
  resetSelection: (function() {
    if (!Ember.isEmpty(this.get('tags'))) {
      return this.processChildElements();
    }
  }).observes('tags.@each')
});

exports["default"] = TaggingSelect2;