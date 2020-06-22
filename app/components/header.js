import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';

export default class HeaderComponent extends Component {
  @service router;

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
    return true;
  }

  constructor() {
    super(...arguments);
    if(this.router.currentRouteName === "splash_page") {
      this.showSmallHeader = true;
    }
  }
}
