import mdiFont from '../fonts/mdi.svg';

export default function fonts($mdIconProvider) {
  "ngInject";
  $mdIconProvider.defaultIconSet(mdiFont);
}