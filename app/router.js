import EmberRouterScroll from "ember-router-scroll";
import config from './config/environment';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('splash_page');
  this.route('exhibit', function() {
    this.route('artists', function() {
      this.route('artist', { path: '/:id' });
    });
    this.route('teams', function() {
      this.route('team', { path: '/:team_id' }, function() {
        this.route('clip', { path: '/:clip_id' });
      });
      this.route('index', { path: '/' }, function() {
        this.route('clip', { path: '/clip/:id' });
      });
    });
    this.route('podcast', function() {
      this.route('episode', { path: 'episode/:id' });
    });
    this.route('about');
    this.route('unveiling');
    this.route('consultants', function() {
      this.route('consultant', { path: '/:id' });
    });
  });
  this.route('unveiling');
  this.route('original_intro');
});
