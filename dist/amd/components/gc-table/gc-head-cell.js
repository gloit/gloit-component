define(
  ["../../mixins/style-bindings","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var HeadCell;

    HeadCell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gc-table-head-cell'],
      styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
      minWidthBinding: 'content.width',
      textAlignBinding: 'content.textAlign',
      defaultTemplate: function(context, options) {
        options = {
          data: options.data,
          hash: {}
        };
        return Ember.Handlebars.helpers.bind.call(context, "view.content.title", options);
      }
    });

    __exports__["default"] = HeadCell;
  });