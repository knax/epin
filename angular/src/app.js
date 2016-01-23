import "babel-polyfill";

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';

import 'angular-material/angular-material.min.css';

import routes from './config/routes';
import fonts from './config/fonts';
import httpInterceptor from './config/httpInterceptor';

import apiConfig from './constants/api';
import menuConfig from './constants/menu';

import main from './features/main';
import diaryEntries from './features/diary-entries';
import diaryEntriesForm from './features/diary-entries-form';
import about from './features/about';

const externalDependency = [
  uiRouter,
  angularAria,
  angularAnimate,
  angularMaterial
];

const features = [
  main,
  diaryEntries,
  about,
  diaryEntriesForm
];

export default angular
  .module('app', externalDependency.concat(features))
  .constant('ApiConfig', apiConfig)
  .constant('MenuConfig', menuConfig)
  .config(routes)
  .config(fonts)
  .config(httpInterceptor)
  .name;