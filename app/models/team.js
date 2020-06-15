import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') slug;
  @attr('string') name;
  @attr('string') tetrominoSvg;
  @attr('string') tetrominoUrl;
  @attr('string') description;
  @attr('string') projectTitle;
  @hasMany('artist') artists;
  @hasMany('clips') clips;
}
