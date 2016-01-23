import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './routes';
import AboutController from './controller';

export default angular
  .module('app.about', [uiRouter])
  .config(routing)
  .controller('AboutController', AboutController)
  .name;