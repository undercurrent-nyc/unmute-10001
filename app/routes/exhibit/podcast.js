import Route from '@ember/routing/route';

export default class ExhibitPodcastRoute extends Route {
  async model() {
    return this.store.findAll("podcast-episode");
  }

}
