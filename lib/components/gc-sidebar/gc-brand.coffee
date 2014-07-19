`import layout from '../../templates/gc-sidebar/gc-brand'`

Brand = Ember.Component.extend
  classNames: ['gc-brand']
  layout: layout

  name: 'Brand'
  imageUrl: null

  logo: (->
    return "<img src='#{@get('imageUrl')}' />".htmlSafe() if @get('imageUrl')

    @get('name')
  ).property('name', 'imageUrl')

  sidebarExpandable: true

`export default Brand`
