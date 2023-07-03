import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-nginx-sample-brand-l');
  this.route('i-i-s-nginx-sample-brand-e',
  { path: 'i-i-s-nginx-sample-brand-e/:id' });
  this.route('i-i-s-nginx-sample-brand-e.new',
  { path: 'i-i-s-nginx-sample-brand-e/new' });
  this.route('i-i-s-nginx-sample-car-l');
  this.route('i-i-s-nginx-sample-car-e',
  { path: 'i-i-s-nginx-sample-car-e/:id' });
  this.route('i-i-s-nginx-sample-car-e.new',
  { path: 'i-i-s-nginx-sample-car-e/new' });
  this.route('i-i-s-nginx-sample-producing-country-l');
  this.route('i-i-s-nginx-sample-producing-country-e',
  { path: 'i-i-s-nginx-sample-producing-country-e/:id' });
  this.route('i-i-s-nginx-sample-producing-country-e.new',
  { path: 'i-i-s-nginx-sample-producing-country-e/new' });
});

export default Router;
