export default function routes($stateProvider) {
  "ngInject";
  $stateProvider
    .state('main.about', {
      url: '/about',
      template: require('./view.html'),
      controller: 'AboutController',
      controllerAs: 'about'
    });
}