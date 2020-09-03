import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  consultant: belognsTo(),
  clips: hasMany(),
  artists: hasMany(),
});
