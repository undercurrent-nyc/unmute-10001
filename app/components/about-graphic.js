import Component from '@glimmer/component';
import { action } from "@ember/object";
import * as d3 from "d3";

export default class AboutGraphicComponent extends Component {
  @action bounceTheBouncer() {
    const bouncer = d3.select("path.bouncer");
    repeat();

    function repeat() {
      const durationIn = d3.randomNormal(5,3)() * 1000 + 500;
      const durationOut = d3.randomNormal(5,3)() * 1000 + 500;
      const delayIn = d3.randomNormal(1.5,1)() * 1000 + 500;
      const delayOut = d3.randomNormal(1.5,1)() * 1000 + 500;

      bouncer
        .transition()
        .delay(delayIn)
        .duration(durationIn)
        .ease(d3.easeSinInOut)
        .attr("transform", "translate(-25.92, 0)")
        .transition()
        .delay(delayOut)
        .duration(durationOut)
        .ease(d3.easeSinInOut)
        .attr("transform", "translate(0, 0)")
        .on("end", repeat);
    }
  }
}
