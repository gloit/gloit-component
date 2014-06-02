import DatetimePickerComponent from './components/gl-datetime-picker';

import LoginFormComponent from './components/gl-login-form';
import LoginFormTemplate from './templates/gl-login-form';

import MainToolbarComponent from './components/gl-main-toolbar';
import MainToolbarTemplate from './templates/gl-main-toolbar';

import PaginationComponent from './components/gl-pagination/gl-pagination';

import SidebarComponent from './components/gl-sidebar/gl-sidebar';
import SidebarTemplate from './templates/gl-sidebar';

import TableColumnModel from './components/gl-table/gl-column-model';
import TableComponent from './components/gl-table/gl-table';
import TableTemplate from './templates/gl-table';

import SidelistComponent from './components/gl-sidelist/gl-sidelist';

import GloitInitializer from './initializers/gl-initializer';

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

export {
  GloitInitializer,
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
  SidelistComponent
}