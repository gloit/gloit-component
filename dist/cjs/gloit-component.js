"use strict";
var DatetimePickerComponent = require("./components/gc-datetime-picker")["default"] || require("./components/gc-datetime-picker");

var LoginFormComponent = require("./components/gc-login-form")["default"] || require("./components/gc-login-form");
var LoginFormTemplate = require("./templates/gc-login-form")["default"] || require("./templates/gc-login-form");

var MainToolbarComponent = require("./components/gc-main-toolbar")["default"] || require("./components/gc-main-toolbar");
var MainToolbarTemplate = require("./templates/gc-main-toolbar")["default"] || require("./templates/gc-main-toolbar");

var PaginationComponent = require("./components/gc-pagination/gc-pagination")["default"] || require("./components/gc-pagination/gc-pagination");

var SidebarComponent = require("./components/gc-sidebar/gc-sidebar")["default"] || require("./components/gc-sidebar/gc-sidebar");
var SidebarTemplate = require("./templates/gc-sidebar")["default"] || require("./templates/gc-sidebar");

var TableColumnModel = require("./components/gc-table/gc-column-model")["default"] || require("./components/gc-table/gc-column-model");
var TableComponent = require("./components/gc-table/gc-table")["default"] || require("./components/gc-table/gc-table");
var TableTemplate = require("./templates/gc-table")["default"] || require("./templates/gc-table");

var SidelistComponent = require("./components/gc-sidelist/gc-sidelist")["default"] || require("./components/gc-sidelist/gc-sidelist");

var Select2Component = require("./components/gc-select2")["default"] || require("./components/gc-select2");
var TaggingSelect2Component = require("./components/gc-tagging-select2")["default"] || require("./components/gc-tagging-select2");

var RateGaugeChartComponent = require("./components/gc-highcharts/gc-rate-gauge-chart")["default"] || require("./components/gc-highcharts/gc-rate-gauge-chart");

var Initializer = require("./initializers/gc-initializer")["default"] || require("./initializers/gc-initializer");

Ember.Application.initializer(Initializer);

Ember.libraries.register('GloitComponent', '0.1.0');

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

exports.Initializer = Initializer;
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
exports.Select2Component = Select2Component;
exports.TaggingSelect2Component = TaggingSelect2Component;
exports.RateGaugeChartComponent = RateGaugeChartComponent;