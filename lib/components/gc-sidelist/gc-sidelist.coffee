`import Item from './gc-item'`

Sidelist = Ember.ListView.extend
  classNames: ['gc-sidelist']

  itemViewClass: Item

  didInsertElement: ->
    @set('height', Ember.$('.gc-sidelist').parent().height())
    @_super()

`export default Sidelist`
