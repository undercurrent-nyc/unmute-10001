import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('string') name;
  @attr('string') tetrominoSvg;
  @attr('string') tetrominoUrl;
  @attr('string') description;
  @attr('string') projectTitle;
  @attr('string') startingDate;
  @belongsTo("consultant") consultant;
  @hasMany('artist') artists;
  @hasMany('clips') clips;

  get slashName(){
    return this.name.split(" ").join(" /");
  }
}
