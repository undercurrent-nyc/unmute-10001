import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') bio;
  @attr('string') avatarUrl;
  @belongsTo('country') country;
  @belongsTo('team') team;
  @hasMany('clip') clips;
}
