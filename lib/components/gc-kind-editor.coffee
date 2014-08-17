KindEditorComponent = Ember.TextArea.extend
  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'createEditor') unless Ember.isNone(KEditor)

  createEditor: ->
    self = @
    afterChange = -> self.set('value', @html())
    options = Ember.merge(afterChange: afterChange, KEditor.options)
    KEditor.create(@$(), options)

`export default KindEditorComponent`
