import Model, { attr } from '@ember-data/model';

export default class PodcastEpisodeModel extends Model {
  @attr("string") url;
  @attr("string") title;
  @attr("string") description;

}
