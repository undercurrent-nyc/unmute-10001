import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ClipThumbnailComponent extends Component {

  colors = [
    {
      background: "bg-black",
      text: "text-white",
    },
    {
      background: "bg-magenta",
      text: "text-white",
    },
    {
      background: "bg-yello",
      text: "text-black",
    },
    {
      background: "bg-cyan",
      text: "text-black",
    },
  ];

  @tracked shaded = false;

  @action  toggleShaded() {
    this.shaded = !this.shaded;
  }
}
