"use strict";
var DatetimePickerComponent = require("./components/gl-datetime-picker")["default"] || require("./components/gl-datetime-picker");

var LoginFormComponent = require("./components/gl-login-form")["default"] || require("./components/gl-login-form");
var LoginFormTemplate = require("./templates/gl-login-form")["default"] || require("./templates/gl-login-form");

var MainToolbarComponent = require("./components/gl-main-toolbar")["default"] || require("./components/gl-main-toolbar");
var MainToolbarTemplate = require("./templates/gl-main-toolbar")["default"] || require("./templates/gl-main-toolbar");

var PaginationComponent = require("./components/gl-pagination/gl-pagination")["default"] || require("./components/gl-pagination/gl-pagination");

var SidebarComponent = require("./components/gl-sidebar/gl-sidebar")["default"] || require("./components/gl-sidebar/gl-sidebar");
var SidebarTemplate = require("./templates/gl-sidebar")["default"] || require("./templates/gl-sidebar");

var TableColumnModel = require("./components/gl-table/gl-column-model")["default"] || require("./components/gl-table/gl-column-model");
var TableComponent = require("./components/gl-table/gl-table")["default"] || require("./components/gl-table/gl-table");
var TableTemplate = require("./templates/gl-table")["default"] || require("./templates/gl-table");

var SidelistComponent = require("./components/gl-sidelist/gl-sidelist")["default"] || require("./components/gl-sidelist/gl-sidelist");

var GloitInitializer = require("./initializers/gl-initializer")["default"] || require("./initializers/gl-initializer");

Ember.Application.initializer(GloitInitializer);

Ember.libraries.register('Gloit', '0.1.0');

Ember.View.reopen({
  init: function() {
    this._super();

    // bind attributes beginning with 'data-'
    Ember.keys(this).forEach(function(key) {
      if(key.substr(0, 5) == 'data-') {
        this.get('attributeBindings').pushObject(key);
      }
    });
  }
});

exports.GloitInitializer = GloitInitializer;
exports.DatetimePickerComponent = DatetimePickerComponent;
exports.LoginFormComponent = LoginFormComponent;
exports.LoginFormTemplate = LoginFormTemplate;
exports.MainToolbarComponent = MainToolbarComponent;
exports.PaginationComponent = PaginationComponent;
exports.SidebarTemplate = SidebarTemplate;
exports.SidebarComponent = SidebarComponent;
exports.TableColumnModel = TableColumnModel;
exports.TableTemplate = TableTemplate;
exports.TableComponent = TableComponent;
exports.SidelistComponent = SidelistComponent;