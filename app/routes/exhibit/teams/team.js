import Route from '@ember/routing/route';

export default class ExhibitTeamsTeamRoute extends Route {
  model(params) {
    return this.store.findRecord("team", params.team_id, { include: "consultant,artists,artists.country,clips" });
  }
}
