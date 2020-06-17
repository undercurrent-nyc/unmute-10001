import Route from '@ember/routing/route';

export default class TeamsTeamRoute extends Route {
  model(params) {
    return this.store.findRecord("team", params.team_id, { include: "artists,artists.country,clips" });
  }
}
