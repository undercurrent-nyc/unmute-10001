import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class HeaderComponent extends Component {
  @tracked
  showSmallHeader = false;

  @action
  onEnter(){
    this.showSmallHeader = false;
    console.log("entered");
  }

  @action
  onExit(){
    this.showSmallHeader = true;
    console.log("exited");
  }
}
