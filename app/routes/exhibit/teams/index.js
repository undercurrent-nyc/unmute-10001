import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default class ExhibitTeamsIndexRoute extends Route {
  async model() {
    return RSVP.hash({
      teams: this.store.findAll("team", { include: "artists,clips" }),
      consultants: this.store.findAll("consultant"),
    });
  }
}
