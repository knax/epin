export default class DiaryEntriesForm {
  constructor($http, $timeout, $stateParams, $state, $mdToast) {
    "ngInject";

    this.$http = $http;
    this.$timeout = $timeout;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$mdToast = $mdToast;

    this.type = ($stateParams.type === 'new') ? 'new' : 'edit';
    this.currentId = (this.type === 'edit') ? $stateParams.type : null;

    this.toolbarTitle = (this.type === 'new') ? 'New Diary Entry' : '';

    this.initializeData();
  }

  async initializeData() {
    let entry = {};

    if(this.type === 'edit') {
      ({data: {data: entry}} = await this.$http.get(`/diary/entries/${this.currentId}`));

      this.toolbarTitle = entry.title;
    }

    this.$timeout(() => this.entry = entry);
  }

  async save() {
    if(this.type === 'edit') {
      const response = await this.$http.put(`/diary/entries/${this.currentId}`, this.entry);

      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent('Edit Success')
          .position('bottom right')
          .hideDelay(3000)
      );
    } else if(this.type === 'new') {
      const response = await this.$http.post(`/diary/entries`, this.entry);

      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent('Create Success')
          .position('bottom right')
          .hideDelay(3000)
      );
    }

    this.entry = {};

    this.goToDiary();
  }

  goToDiary() {
    this.$state.go('main.diary');
  }
}
