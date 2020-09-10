import Route from '@ember/routing/route';

export default class UnveilingRoute extends Route {
  beforeModel() {
    this.transitionTo('exhibit.unveiling');
  }
}
