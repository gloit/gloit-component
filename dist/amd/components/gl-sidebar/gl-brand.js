define(
  ["../../templates/gl-sidebar/gl-brand","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Brand;

    Brand = Ember.Component.extend({
      classNames: ['gl-brand'],
      layout: layout,
      name: 'Brand',
      imageUrl: null,
      logo: (function() {
        if (this.get('imageUrl')) {
          return ("<img src='" + (this.get('imageUrl')) + "' />").htmlSafe();
        }
        return this.get('name');
      }).property('name', 'imageUrl'),
      sidebarExpandable: true
    });

    __exports__["default"] = Brand;
  });