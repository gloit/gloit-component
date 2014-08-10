KindEditorComponent = Ember.TextArea.extend
  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'createEditor') unless Ember.isNone(KindEditor)

  createEditor: -> KindEditor.create(@$(), KindEditor.options)

`export default KindEditorComponent`
