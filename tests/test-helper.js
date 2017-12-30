import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';
import Application from '../app';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

  setResolver(resolver);
  setApplication(Application.create({ autoboot: false }));
  start();
