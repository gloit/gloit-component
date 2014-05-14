import DatetimePickerComponent from './components/gl-datetime-picker';

import LoginFormComponent from './components/gl-login-form';
import LoginFormTemplate from './templates/gl-login-form';

import MainToolbarComponent from './components/gl-main-toolbar';
import MainToolbarTemplate from './templates/gl-main-toolbar';

import PaginationComponent from './components/gl-pagination/gl-pagination';

import SidebarComponent from './components/gl-sidebar/gl-sidebar';
import SidebarTemplate from './templates/gl-sidebar';

Ember.Application.initializer({
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
  }
});

Ember.libraries.register('Gloit', '0.1.0');

export {
  DatetimePickerComponent,
  LoginFormComponent,
  LoginFormTemplate,
  MainToolbarComponent,
  PaginationComponent,
  SidebarTemplate,
  SidebarComponent
}
