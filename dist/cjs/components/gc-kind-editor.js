"use strict";
var KindEditorComponent;

KindEditorComponent = Ember.TextArea.extend({
  didInsertElement: function() {
    if (!Ember.isNone(KindEditor)) {
      return Ember.run.scheduleOnce('afterRender', this, 'createEditor');
    }
  },
  createEditor: function() {
    return KindEditor.create(this.get('elementId'), KindEditor.options);
  }
});

exports["default"] = KindEditorComponent;