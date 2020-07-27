import Route from '@ember/routing/route';

export default class ExhibitTeamsIndexRoute extends Route {
  async model() {
    return this.store.findAll("team", { include: "artists,clips" });
  }
}
