define(
  ["exports"],
  function(__exports__) {
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

    __exports__["default"] = KindEditorComponent;
  });