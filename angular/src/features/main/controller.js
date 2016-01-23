export default class MainController {
  constructor($mdSidenav, $mdMedia, MenuConfig, $state) {
    "ngInject";

    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.$state = $state;

    this.menus = MenuConfig;
  }

  openMenu() {
    this.$mdSidenav('left').open();
  }

  closeMenu() {
    this.$mdSidenav('left').close();
  }
  
  navigateTo(stateName) {
    this.closeMenu();
    this.$state.go(stateName);
  }
}
