import Component from '@glimmer/component';
import { action } from "@ember/object";
import * as d3 from "d3";

export default class ComingSoonComponent extends Component {

  @action breathe() {
    const tetrominos = d3.select("svg.coming-soon-svg")
      .selectAll("g.coming-soon-tetronimo")
    repeat();

    function repeat() {
      tetrominos
        .each(function(d) {
          d3.select(this)
            .datum({
            durationIn: d3.randomNormal(8,3)() * 1000 + 500,
            durationOut: d3.randomNormal(8,3)() * 1000 + 500,
            delay: d3.randomNormal(7,3)() * 1000,
            });
        })
        .transition()
        .delay(d => d.delay)
        .duration(d => d.durationIn)
        .ease(d3.easeSinInOut)
        .style("opacity", 0)
        .transition()
        .delay(d => 5000 + d.delay)
        .duration(d => d.durationOut)
        .ease(d3.easeSinInOut)
        .style("opacity", 1)
        .on("end", repeat);
    }
  }

}
