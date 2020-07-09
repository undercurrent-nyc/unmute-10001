import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') bio;
  @attr('string') avatarUrl;
  @attr('string') websiteUrl;
  @belongsTo('country') country;
  @belongsTo('team') team;

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
