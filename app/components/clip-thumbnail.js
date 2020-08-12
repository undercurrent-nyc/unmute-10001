import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ClipThumbnailComponent extends Component {

  backgrounds = ["bg-black", "bg-magenta", "bg-yello", "bg-cyan"];

  @tracked shaded = false;

  @action  toggleShaded() {
    this.shaded = !this.shaded;
  }
}
