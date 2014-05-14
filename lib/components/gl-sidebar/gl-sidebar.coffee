`import Brand from './gl-brand'`
`import Navigator from './gl-navigator'`
`import Starter from './gl-Starter'`

Sidebar = Ember.Component.extend
  brandView: Brand
  navigatorView: Navigator
  starterView: Starter

  classNames: ['gl-sidebar']
  classNameBindings: ['expanded:gl-sidebar-expanded']

  expanded: true
  expandable: true

  brand: { name: 'Brand', imageUrl: null }
  menus: []
  starterItems: []

  actions:
    triggerMenu: (menu) ->
      @triggerAction action: 'triggerMenu', actionContext: menu

`export default Sidebar`
