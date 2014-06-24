"use strict";
var DatetimePickerComponent = require("../components/gl-datetime-picker")["default"] || require("../components/gl-datetime-picker");

var LoginFormComponent = require("../components/gl-login-form")["default"] || require("../components/gl-login-form");
var LoginFormTemplate = require("../templates/gl-login-form")["default"] || require("../templates/gl-login-form");

var MainToolbarComponent = require("../components/gl-main-toolbar")["default"] || require("../components/gl-main-toolbar");
var MainToolbarTemplate = require("../templates/gl-main-toolbar")["default"] || require("../templates/gl-main-toolbar");

var PaginationComponent = require("../components/gl-pagination/gl-pagination")["default"] || require("../components/gl-pagination/gl-pagination");

var SidebarComponent = require("../components/gl-sidebar/gl-sidebar")["default"] || require("../components/gl-sidebar/gl-sidebar");
var SidebarTemplate = require("../templates/gl-sidebar")["default"] || require("../templates/gl-sidebar");

var TableComponent = require("../components/gl-table/gl-table")["default"] || require("../components/gl-table/gl-table");
var TableTemplate = require("../templates/gl-table")["default"] || require("../templates/gl-table");

var SidelistComponent = require("../components/gl-sidelist/gl-sidelist")["default"] || require("../components/gl-sidelist/gl-sidelist");

var Select2Component = require("../components/gl-select2")["default"] || require("../components/gl-select2");
var TaggingSelect2Component = require("../components/gl-tagging-select2")["default"] || require("../components/gl-tagging-select2");

exports["default"] = {
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