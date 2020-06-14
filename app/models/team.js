import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') name;
  @attr('string') tetrominoSvg;
  @attr('string') description;
  @attr('string') title;
  @hasMany('artist') artists;
  @hasMany('clips') clips;
}
