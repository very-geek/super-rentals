import { setApplication } from '@ember/test-helpers';

import Application from 'super-rentals/app';
import config from 'super-rentals/config/environment';

import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
