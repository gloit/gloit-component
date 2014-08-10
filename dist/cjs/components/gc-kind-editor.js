"use strict";
var KindEditor;

KindEditor = Ember.TextArea.extend({
  didInsertElement: function() {
    if (!Ember.isNone(K)) {
      return Ember.run.scheduleOnce('afterRender', this, 'createEditor');
    }
  },
  createEditor: function() {
    return K.create(this.get('elementId'));
  }
});

exports["default"] = KindEditor;