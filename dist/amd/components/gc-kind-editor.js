define(
  ["exports"],
  function(__exports__) {
    "use strict";
    var KindEditorComponent;

    KindEditorComponent = Ember.TextArea.extend({
      didInsertElement: function() {
        if (!Ember.isNone(KEditor)) {
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
        }, KEditor.options);
        return KEditor.create(this.$(), options);
      }
    });

    __exports__["default"] = KindEditorComponent;
  });