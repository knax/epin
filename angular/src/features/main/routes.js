export default function routes($stateProvider) {
  "ngInject";
  $stateProvider
    .state('main', {
      url: '',
      template: require('./view.html'),
      controller: 'MainController',
      abstract: true,
      controllerAs: 'main'
    });
}