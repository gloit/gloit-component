define(
  ["../components/gl-datetime-picker","../components/gl-login-form","../templates/gl-login-form","../components/gl-main-toolbar","../templates/gl-main-toolbar","../components/gl-pagination/gl-pagination","../components/gl-sidebar/gl-sidebar","../templates/gl-sidebar","../components/gl-table/gl-table","../templates/gl-table","../components/gl-sidelist/gl-sidelist","../components/gl-select2","../components/gl-tagging-select2","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __exports__) {
    "use strict";
    var DatetimePickerComponent = __dependency1__["default"] || __dependency1__;

    var LoginFormComponent = __dependency2__["default"] || __dependency2__;
    var LoginFormTemplate = __dependency3__["default"] || __dependency3__;

    var MainToolbarComponent = __dependency4__["default"] || __dependency4__;
    var MainToolbarTemplate = __dependency5__["default"] || __dependency5__;

    var PaginationComponent = __dependency6__["default"] || __dependency6__;

    var SidebarComponent = __dependency7__["default"] || __dependency7__;
    var SidebarTemplate = __dependency8__["default"] || __dependency8__;

    var TableComponent = __dependency9__["default"] || __dependency9__;
    var TableTemplate = __dependency10__["default"] || __dependency10__;

    var SidelistComponent = __dependency11__["default"] || __dependency11__;

    var Select2Component = __dependency12__["default"] || __dependency12__;
    var TaggingSelect2Component = __dependency13__["default"] || __dependency13__;

    __exports__["default"] = {
      name: 'gloit',

      initialize: function(container) {
        container.register('component:gl-datetime-picker', DatetimePickerComponent);

        container.register('template:components/gl-login-form', LoginFormTemplate);
        container.register('component:gl-login-form', LoginFormComponent);

        container.register('template:components/gl-main-toolbar', MainToolbarTemplate);
        container.register('component:gl-main-toolbar', MainToolbarComponent);

        container.register('component:gl-pagination', PaginationComponent);

        container.register('template:components/gl-sidebar', SidebarTemplate);
        container.register('component:gl-sidebar', SidebarComponent);

        container.register('template:components/gl-table', TableTemplate);
        container.register('component:gl-table', TableComponent);

        container.register('component:gl-sidelist', SidelistComponent);

        container.register('component:gl-select2', Select2Component);
        container.register('component:gl-tagging-select2', TaggingSelect2Component);
      }
    };
  });