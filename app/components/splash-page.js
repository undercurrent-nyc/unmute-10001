import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class SplashPageComponent extends Component {
  @service router;

  @action 
  transition() {
    this.router.transitionTo("exhibit.index");
  }

}
