import Route from '@ember/routing/route';

export default class ExhibitConsultantsRoute extends Route {
  model() {
    return this.store.findAll("consultant", {include: "teams,teams.artists,teams.artists.country,teams.clips" });
  }
}
