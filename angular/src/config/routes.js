export default function routes($urlRouterProvider) {
  "ngInject";
  $urlRouterProvider.otherwise('/diary');
  $urlRouterProvider.when('/', '/diary');
}