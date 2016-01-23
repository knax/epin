import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './routes';
import MainController from './controller';
import mainCss from './style.css';

export default angular.module('app.main', [uiRouter])
  .config(routing)
  .controller('MainController', MainController)
  .name;