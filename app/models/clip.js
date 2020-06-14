import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClipModel extends Model {
  @attr('string') fileUrl;
  @attr('string') startTime;
  @attr('string') duration;
  @attr('date') postDate;
  @belongsTo('team') team;
  @belongsTo('artist') artist;
}
