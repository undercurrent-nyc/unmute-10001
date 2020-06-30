import Route from '@ember/routing/route';

export default class ExhibitArtistsArtistRoute extends Route {
  model(params){
    return this.store.findRecord("artist", params.id, { include: "team,country" });
  }
}
