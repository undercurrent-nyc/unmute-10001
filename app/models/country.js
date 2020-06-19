import Model, { attr, hasMany } from '@ember-data/model';

export default class CountryModel extends Model {
  @attr('string') orgName;
  @attr('string') countryName;
  @attr('string') locale;
  @attr('string') description;
  @attr('string') website;
  @attr('string') logoSvgName;
  @attr('string') logoUrl;
  @attr('string') flagUrl;
  @hasMany('artist') artists;
}
