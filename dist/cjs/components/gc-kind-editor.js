"use strict";
var KindEditorComponent;

KindEditorComponent = Ember.TextArea.extend({
  didInsertElement: function() {
    if (!Ember.isNone(KindEditor)) {
      return Ember.run.scheduleOnce('afterRender', this, 'createEditor');
    }
  },
  createEditor: function() {
    var afterChange, options, self;
    self = this;
    afterChange = function() {
      return self.set('value', this.html());
    };
    options = Ember.merge({
      afterChange: afterChange
    }, KindEditor.options);
    return KindEditor.create(this.$(), options);
  }
});

exports["default"] = KindEditorComponent;