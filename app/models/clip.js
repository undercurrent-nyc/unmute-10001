import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClipModel extends Model {
  @attr('string') title;
  @attr('string') vimeoCode;
  @attr('string') fileUrl;
  @attr('string') startTime;
  @attr('string') duration;
  @attr('string') thumbnailUrl;
  @attr('string') description;
  @attr('date') recordDate;
  @attr('date') postDate;
  @attr('boolean', { defaultValue: false }) dummy;
  @attr('boolean', { defaultValue: false }) consultant;
  @attr('boolean', { defaultValue: false }) youTube;
  @belongsTo('team') team;
}
