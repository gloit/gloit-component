`import layout from '../../templates/gl-sidebar/gl-navigator'`

Navigator = Ember.Component.extend
  classNames: ['gl-navigator']

  layout: layout

  menus: []

  didInsertElement: ->
    height = @$().parent().height() - 60 - 90
    @$().height(height)

    triggersHeight = @get('menus.length') * 50 + 30
    @$('.menu-items').height(height - triggersHeight)

  actions:
    triggerMenu: (menu) ->
      @triggerAction action: 'triggerMenu', actionContext: menu

`export default Navigator`