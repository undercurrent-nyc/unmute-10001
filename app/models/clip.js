import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClipModel extends Model {
  @attr('string') title;
  @attr('string') fileUrl;
  @attr('string') startTime;
  @attr('string') duration;
  @attr('string') thumbnailUrl;
  @attr('date') postDate;
  @belongsTo('team') team;
}
