`import Item from './gl-item'`

Sidelist = Ember.ListView.extend
  classNames: ['gl-sidelist']

  itemViewClass: Item

  didInsertElement: ->
    @set('height', Ember.$('.gl-sidelist').parent().height())
    @_super()

`export default Sidelist`
