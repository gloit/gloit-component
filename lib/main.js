import GloitDatetimePickerComponent from './components/gl-datetime-picker';

import GloitLoginFormComponent from './components/gl-login-form';
import GloitLoginFormTemplate from './templates/gl-login-form';

import GloitMainToolbarComponent from './components/gl-main-toolbar';
import GloitMainToolbarTemplate from './templates/gl-main-toolbar';

Ember.Application.initializer({
  name: 'gloit',

  initialize: function(container) {
    container.register('component:gl-datetime-picker', GloitDatetimePickerComponent);

    container.register('template:components/gl-login-form', GloitLoginFormTemplate);
    container.register('component:gl-login-form', GloitLoginFormComponent);

    container.register('template:components/gl-main-toolbar', GloitMainToolbarTemplate);
    container.register('component:gl-main-toolbar', GloitMainToolbarComponent);
  }
});

Ember.libraries.register('Gloit', '0.1.0');

export {
  GloitDatetimePickerComponent,
  GloitLoginFormComponent,
  GloitLoginFormTemplate,
  GloitMainToolbarComponent
}
