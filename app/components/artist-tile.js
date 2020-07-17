import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ArtistTileComponent extends Component {
  @tracked shaded = false;

  @action  toggleShaded() {
    this.shaded = !this.shaded;
  }
}
