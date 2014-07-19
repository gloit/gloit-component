`import Brand from './gc-brand'`
`import Navigator from './gc-navigator'`
`import Starter from './gc-Starter'`

Sidebar = Ember.Component.extend
  brandView: Brand
  navigatorView: Navigator
  starterView: Starter

  classNames: ['gc-sidebar']
  classNameBindings: ['expanded:gc-sidebar-expanded']

  expanded: true
  expandable: true

  brand: { name: 'Brand', imageUrl: null }
  menus: []
  starterItems: []

  actions:
    triggerMenu: (menu) ->
      @triggerAction action: 'triggerMenu', actionContext: menu

`export default Sidebar`
