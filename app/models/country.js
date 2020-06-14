import Model, { attr, hasMany } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr('string') name;
  @attr('string') locale;
  @attr('string') description;
  @attr('string') website;
  @hasMany('artist') artists;
}
