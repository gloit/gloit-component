KindEditorComponent = Ember.TextArea.extend
  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'createEditor') unless Ember.isNone(KindEditor)

  createEditor: ->
    self = @
    afterChange = -> self.set('value', @html())
    options = Ember.merge(afterChange: afterChange, KindEditor.options)
    KindEditor.create(@$(), options)

`export default KindEditorComponent`
