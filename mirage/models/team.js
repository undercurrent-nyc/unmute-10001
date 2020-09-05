import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  consultant: belongsTo(),
  clips: hasMany(),
  artists: hasMany(),
});
