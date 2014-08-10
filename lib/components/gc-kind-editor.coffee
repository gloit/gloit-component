KindEditorComponent = Ember.TextArea.extend
  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'createEditor') unless Ember.isNone(KindEditor)

  createEditor: -> K.create(@get('elementId'))

`export default KindEditorComponent`
