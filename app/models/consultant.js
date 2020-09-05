import Model, { attr, hasMany } from '@ember-data/model';

export default class ConsultantModel extends Model {
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("string") websiteUrl;
  @attr("string") bio; 
  @attr('string') avatarUrl;
  @hasMany("team") teams;
}
