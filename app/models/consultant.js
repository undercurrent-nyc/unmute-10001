import Model, { attr, hasMany } from '@ember-data/model';

export default class ConsultantModel extends Model {
  @attr("string") name;
  @attr("string") websiteUrl;
  @attr("string") bio; 
  @attr('string') avatarUrl;
  @hasMany("team") teams;
}
