import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class SplashPageComponent extends Component {
  @service router;

  @action 
  transition() {
    // this.router.transitionTo("exhibit.index");
    this.router.transitionTo("exhibit.about");
  }

  teams = [
    {
      svg: "team-z",
      name: "TEAM /Z",
    },
    {
      svg: "team-s",
      name: "TEAM /S",
    },
    {
      svg: "team-t",
      name: "TEAM /T",
    },
    {
      svg: "team-l",
      name: "TEAM /L",
    },
    {
      svg: "team-j",
      name: "TEAM /J",
    },
    {
      svg: "team-i",
      name: "TEAM /I",
    },
  ]
}
