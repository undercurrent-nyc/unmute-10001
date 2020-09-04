import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class CountdownTimerComponent extends Component {
  
  // liveTime = new Date("2020-09-11T13:00:00");
  liveTime = 1599843600000;

  @tracked diff = {};

  @tracked live = false;

  @action startClock() {
    setInterval(() => {
      this.diff = this.calculateDiff();
    }, 1000);
  }

  calculateDiff() {
    const now = new Date();
    let diff = this.liveTime - now;

    if(diff < 0) {
      this.live = true;
    }

    const days = Math.floor(diff/(24 * 60 * 60 * 1000));
    diff -= days * 24 * 60 * 60 * 1000;
    const hours = Math.floor(diff/(60 * 60 * 1000));
    diff -= hours * 60 * 60 * 1000;
    const minutes = Math.floor(diff/(60 * 1000));
    diff -= minutes * 60 * 1000;
    const seconds = Math.floor(diff/1000);

    return {
      seconds,
      minutes,
      hours,
      days,
    };
  }

  constructor() {
    super(...arguments);
    this.diff = this.calculateDiff();
  }
}
