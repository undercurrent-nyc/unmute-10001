import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClipModel extends Model {
  @attr('string') title;
  @attr('number') vimeoCode;
  @attr('string') fileUrl;
  @attr('string') startTime;
  @attr('string') duration;
  @attr('string') thumbnailUrl;
  @attr('date') postDate;
  @attr('boolean') dummy;
  @belongsTo('team') team;
}
