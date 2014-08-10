import DatetimePickerComponent from './components/gc-datetime-picker';

import LoginFormComponent from './components/gc-login-form';
import LoginFormTemplate from './templates/gc-login-form';

import MainToolbarComponent from './components/gc-main-toolbar';
import MainToolbarTemplate from './templates/gc-main-toolbar';

import PaginationComponent from './components/gc-pagination/gc-pagination';

import SidebarComponent from './components/gc-sidebar/gc-sidebar';
import SidebarTemplate from './templates/gc-sidebar';

import TableColumnModel from './components/gc-table/gc-column-model';
import TableComponent from './components/gc-table/gc-table';
import TableTemplate from './templates/gc-table';

import SidelistComponent from './components/gc-sidelist/gc-sidelist';

import Select2Component from './components/gc-select2';
import TaggingSelect2Component from './components/gc-tagging-select2';

import RateGaugeChartComponent from './components/gc-highcharts/gc-rate-gauge-chart';

import KindEditorComponent from './components/gc-kind-editor';

import Initializer from './initializers/gc-initializer';

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

export {
  Initializer,
  DatetimePickerComponent,
  LoginFormComponent,
  LoginFormTemplate,
  MainToolbarComponent,
  PaginationComponent,
  SidebarTemplate,
  SidebarComponent,
  TableColumnModel,
  TableTemplate,
  TableComponent,
  SidelistComponent,
  Select2Component,
  TaggingSelect2Component,
  RateGaugeChartComponent,
  KindEditorComponent
}
