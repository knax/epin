export default class About {
  constructor($http) {
    "ngInject";

    $http.get('/diary/entries').then((data) => console.log(data, 'data'));
  }
}
