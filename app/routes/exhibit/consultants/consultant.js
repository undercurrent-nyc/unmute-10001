import Route from '@ember/routing/route';

export default class ExhibitConsultantsConsultantRoute extends Route {
  model(params){
    return this.store.findRecord("consultant", params.id, { include: "teams,teams.artists" });
  }
}
