import Model, { attr, hasMany } from '@ember-data/model';

export default class ConsultantModel extends Model {
  @attr("string") name;
  @attr("string") url;
  @attr("string") bio; 
  @hasMany("team") teams;
}
