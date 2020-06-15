import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('artists', function() {
    this.route('artist', { path: '/:slug' });
  });
  this.route('teams', function() {
    this.route('team', { path: '/:slug' }, function() {
      this.route('clip', { path: '/:id' });
    });
    this.route('index', function() {
      this.route('clip', { path: '/:id' });
    });
  });
});
