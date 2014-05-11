LoginForm = Ember.Component.extend
  classNames: ['gl-login-form']

  title: 'Sign in'
  copyright: '&copy; 2011-2014'

  registerable: false

  # Default handler of sign in
  action: 'authenticate'

  titleHtmlSafe: (->
    @get('title').htmlSafe()
  ).property('title')

  copyrightHtmlSafe: ( ->
    @get('copyright').htmlSafe()
  ).property('copyright')

  didInsertElement: ->
    Ember.$('input#identification').focus()

  actions:
    login: ->
      @sendAction('action')

`export default LoginForm`
