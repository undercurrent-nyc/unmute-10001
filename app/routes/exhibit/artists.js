import Route from '@ember/routing/route';

export default class ExhibitArtistsRoute extends Route {
  model() {
    return this.store.findAll("artist", { include: "team,country" });
  }
}
