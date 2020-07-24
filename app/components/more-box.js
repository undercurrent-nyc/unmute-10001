import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class MoreBoxComponent extends Component {
  @tracked showMoreButton = true;

  @action
  showMoreText() {
    this.showMoreButton = false;
  }

  @action
  measureOverflow(element) {
    this.showMoreButton = element.clientHeight < element.scrollHeight;
  }

  @action 
  remeasureOverflow(element) {
    console.log("remeasuring");
    this.showMoreButton = false;
    this.measureOverflow(element);
  }
}
