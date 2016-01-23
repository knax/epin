export default function routes($stateProvider) {
  "ngInject";

  $stateProvider
    .state('main.diary', {
      url: '/diary',
      template: require('./view.html'),
      controller: 'DiaryEntriesController',
      controllerAs: 'diaryEntries'
    });
}