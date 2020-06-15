import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  country: belongsTo(),
  team: belongsTo(),
});
