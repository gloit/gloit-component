MainToolbar = Ember.Component.extend
  classNames: ['gc-main-toolbar']

  parentItems: (->
    @get('items').slice(0, @get('items.length') - 1) unless Ember.isEmpty(@get('items'))
  ).property('items.@each')

  activeItem: (->
    @get('items.lastObject')
  ).property('items.@each')

`export default MainToolbar`
