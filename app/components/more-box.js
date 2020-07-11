import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class MoreBoxComponent extends Component {
  @tracked moreShown = false;

  @action
  showMore() {
    this.moreShown = true;
  }

}
