export default function routes($stateProvider) {
  "ngInject";

  $stateProvider
    .state('main.diary-form', {
      url: '/diary/{type}',
      template: require('./view.html'),
      controller: 'DiaryEntriesFormController',
      controllerAs: 'diaryEntriesForm'
    });
}