import Route from '@ember/routing/route';

export default class ExhibitPodcastEpisodeRoute extends Route {
  model(params){
    return this.store.findRecord("podcast-episode", params.id);
  }
}
