import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';

export default class HeaderComponent extends Component {
  @action
  *transition({ insertedSprites, removedSprites }) {
    insertedSprites.forEach(fadeIn);
    removedSprites.forEach(fadeOut);
  }

  @tracked
  showSmallHeader = false;

  @action
  onEnter(){
    this.showSmallHeader = false;
  }

  @action
  onExit(){
    this.showSmallHeader = true;
  }
}
