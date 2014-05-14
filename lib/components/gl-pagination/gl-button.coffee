`import paginationButtonTemplate from '../../templates/gl-pagination/gl-button'`

PaginationButton = Ember.Component.extend
  tagName: 'li'
  template: paginationButtonTemplate

  classNameBindings: ['disabled:disabled', 'active:active']

  currentBinding: 'parentView.current'

  disabled: (->
    page = @get('content.page')
    page != @get('content.text') && page == @get('current')
  ).property('current', 'content.{page, text}')

  active: (->
    page = @get('content.page')
    page == @get('content.text') && page == @get('current')
  ).property('current', 'content.{page, text}')

  actions:
    page: (page) ->
      @triggerAction action: 'page', actionContext: page

`export default PaginationButton`
