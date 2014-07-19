import DatetimePickerComponent from '../components/gc-datetime-picker';

import LoginFormComponent from '../components/gc-login-form';
import LoginFormTemplate from '../templates/gc-login-form';

import MainToolbarComponent from '../components/gc-main-toolbar';
import MainToolbarTemplate from '../templates/gc-main-toolbar';

import PaginationComponent from '../components/gc-pagination/gc-pagination';

import SidebarComponent from '../components/gc-sidebar/gc-sidebar';
import SidebarTemplate from '../templates/gc-sidebar';

import TableComponent from '../components/gc-table/gc-table';
import TableTemplate from '../templates/gc-table';

import SidelistComponent from '../components/gc-sidelist/gc-sidelist';

import Select2Component from '../components/gc-select2';
import TaggingSelect2Component from '../components/gc-tagging-select2';

export default {
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
  }
};
