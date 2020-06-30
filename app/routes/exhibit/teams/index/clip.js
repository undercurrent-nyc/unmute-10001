import Route from '@ember/routing/route';

export default class ExhibitTeamsIndexClipRoute extends Route {
  model(params){
    return this.store.findRecord("clip", params.id, { include: "team" });
  }
}
