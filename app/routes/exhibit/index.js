import Route from '@ember/routing/route';

export default class ExhibitIndexRoute extends Route {
  beforeModel() {
    this.transitionTo('exhibit.teams.index');
  }
}
