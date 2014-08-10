KindEditor = Ember.TextArea.extend
  didInsertElement: ->
    Ember.run.scheduleOnce('afterRender', @, 'createEditor') unless Ember.isNone(K)

  createEditor: -> K.create(@get('elementId'))

`export default KindEditor`
