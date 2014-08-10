"use strict";
var KindEditorComponent;

KindEditorComponent = Ember.TextArea.extend({
  didInsertElement: function() {
    if (!Ember.isNone(KindEditor)) {
      return Ember.run.scheduleOnce('afterRender', this, 'createEditor');
    }
  },
  createEditor: function() {
    return K.create(this.get('elementId'));
  }
});

exports["default"] = KindEditorComponent;