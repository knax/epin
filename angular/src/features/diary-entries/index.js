import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './routes';
import DiaryEntriesController from './controller';

export default angular
  .module('app.diary', [uiRouter])
  .config(routing)
  .controller('DiaryEntriesController', DiaryEntriesController)
  .name;