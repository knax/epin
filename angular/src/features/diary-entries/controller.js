export default class DiaryEntries {
  constructor($http, $timeout, $state, $mdDialog, $mdToast) {
    "ngInject";

    this.$http = $http;
    this.$timeout = $timeout;
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;

    this.initializeData();
  }

  async initializeData() {
    let {data: {data: diaryEntries}} = await this.$http.get('/diary/entries');

    this.$timeout(() => this.entries = diaryEntries);
  }

  create() {
    this.$state.go('main.diary-form', {
      type: 'new'
    })
  }

  edit(entry) {
    this.$state.go('main.diary-form', {
      type: entry.id
    })
  }

  delete($event, entry) {
    const confirm = this.$mdDialog.confirm()
      .title('Are you sure want to delete?')
      .textContent('This action can\'t be reversed')
      .ariaLabel('Delete')
      .targetEvent($event)
      .ok('Yes')
      .cancel('No');

    let dialogResult = this.$mdDialog.show(confirm)
      .then(async () => {
        await this.$http.delete(`/diary/entries/${entry.id}`);

        this.initializeData();

        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Delete Success')
            .position('bottom right')
            .hideDelay(3000)
        );
      });
  }
}
