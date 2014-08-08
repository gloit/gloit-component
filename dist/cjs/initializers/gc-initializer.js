"use strict";
var DatetimePickerComponent = require("../components/gc-datetime-picker")["default"] || require("../components/gc-datetime-picker");

var LoginFormComponent = require("../components/gc-login-form")["default"] || require("../components/gc-login-form");
var LoginFormTemplate = require("../templates/gc-login-form")["default"] || require("../templates/gc-login-form");

var MainToolbarComponent = require("../components/gc-main-toolbar")["default"] || require("../components/gc-main-toolbar");
var MainToolbarTemplate = require("../templates/gc-main-toolbar")["default"] || require("../templates/gc-main-toolbar");

var PaginationComponent = require("../components/gc-pagination/gc-pagination")["default"] || require("../components/gc-pagination/gc-pagination");

var SidebarComponent = require("../components/gc-sidebar/gc-sidebar")["default"] || require("../components/gc-sidebar/gc-sidebar");
var SidebarTemplate = require("../templates/gc-sidebar")["default"] || require("../templates/gc-sidebar");

var TableComponent = require("../components/gc-table/gc-table")["default"] || require("../components/gc-table/gc-table");
var TableTemplate = require("../templates/gc-table")["default"] || require("../templates/gc-table");

var SidelistComponent = require("../components/gc-sidelist/gc-sidelist")["default"] || require("../components/gc-sidelist/gc-sidelist");

var Select2Component = require("../components/gc-select2")["default"] || require("../components/gc-select2");
var TaggingSelect2Component = require("../components/gc-tagging-select2")["default"] || require("../components/gc-tagging-select2");

var RateGaugeChartComponent = require("../components/gc-highcharts/gc-rate-gauge-chart")["default"] || require("../components/gc-highcharts/gc-rate-gauge-chart");

exports["default"] = {
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

    container.register('component:gc-select2', Select2Component);
    container.register('component:gc-tagging-select2', TaggingSelect2Component);

    container.register('component:gc-rate-gauge-chart', RateGaugeChartComponent);
  }
};