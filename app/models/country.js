import Model, { attr, hasMany } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr('string') slug;
  @attr('string') orgName;
  @attr('string') countryName;
  @attr('string') locale;
  @attr('string') description;
  @attr('string') website;
  @attr('string') logoUrl;
  @attr('string') flagUrl;
  @hasMany('artist') artists;
}
