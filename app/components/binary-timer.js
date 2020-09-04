import Component from '@glimmer/component';
import { action } from "@ember/object";
import * as d3 from "d3";

export default class BinaryTimerComponent extends Component {
  @action runBinaryTimer() {
    repeat();

    function repeat() {
      const liveTime = 1599843600000;
      // const liveTime = new Date("2020-09-11T13:00:00");
      const now = new Date();
      const diff = Math.floor((liveTime - now)/1000);
      if (diff > 0) {
        diff
          .toString(2)
          .padStart(20, "0")
          .split("").forEach( (value, index) => {
            d3.selectAll(`.binary-timer-block-${index}`)
              .transition()
              .duration(1000)
              .ease(d3.easeSinIn)
              .style("fill", () => {
                if (value === "0") {
                  return "#FFFFFF"
                }

                return "#000000";
              })
              .on("end", repeat);
        });
      }
    }
  }
}
