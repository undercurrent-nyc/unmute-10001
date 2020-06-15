import EmberRouterScroll from "ember-router-scroll";
import config from './config/environment';

export default class Router extends EmberRouterScroll {
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
    this.route('index', { path: '/' }, function() {
      this.route('clip', { path: '/clip/:id' });
    });
  });
});
