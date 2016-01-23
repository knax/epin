import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './routes';
import DiaryEntriesFormController from './controller';

export default angular
  .module('app.diary-form', [uiRouter])
  .config(routing)
  .controller('DiaryEntriesFormController', DiaryEntriesFormController)
  .name;