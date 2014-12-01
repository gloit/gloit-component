define(
  ["../components/gc-datetime-picker","../components/gc-login-form","../templates/gc-login-form","../components/gc-main-toolbar","../templates/gc-main-toolbar","../components/gc-pagination/gc-pagination","../components/gc-sidebar/gc-sidebar","../templates/gc-sidebar","../components/gc-table/gc-table","../templates/gc-table","../components/gc-sidelist/gc-sidelist","../components/gc-highcharts/gc-rate-gauge-chart","../components/gc-kind-editor","exports"],
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

    var RateGaugeChartComponent = __dependency12__["default"] || __dependency12__;

    var KindEditorComponent = __dependency13__["default"] || __dependency13__;

    __exports__["default"] = {
      name: 'gloit-component',

      initialize: function(container) {
        container.register('component:gc-datetime-picker', DatetimePickerComponent);

        container.register('template:components/gc-login-form', LoginFormTemplate);
        container.register('component:gc-login-form', LoginFormComponent);

        container.register('template:components/gc-main-toolbar', MainToolbarTemplate);
        container.register('component:gc-main-toolbar', MainToolbarComponent);

        container.register('component:gc-pagination', PaginationComponent);

        container.register('template:components/gc-sidebar', SidebarTemplate);
        container.register('component:gc-sidebar', SidebarComponent);

        container.register('template:components/gc-table', TableTemplate);
        container.register('component:gc-table', TableComponent);

        container.register('component:gc-sidelist', SidelistComponent);

        container.register('component:gc-rate-gauge-chart', RateGaugeChartComponent);

        container.register('component:gc-kind-editor', KindEditorComponent);
      }
    };
  });