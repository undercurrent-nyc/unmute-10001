import Route from '@ember/routing/route';

export default class ExhibitRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('exhibit.teams.index');
  }
}
