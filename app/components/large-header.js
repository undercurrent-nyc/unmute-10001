import Component from '@glimmer/component';
import { action } from "@ember/object";
import * as d3 from "d3";

export default class LargeHeaderComponent extends Component {
  @action
  waitAndLaunch() {
    // return setTimeout(() => {
      this.launchSlotMachine();
    // }, 2000);
  };

  launchSlotMachine() {
    const width = 93;
    const height = 128;
    const yPos = 95.65;
    const paths =
      ["M93.29,63.53c0,38.15-15.45,64.67-46.93,64.67C14.31,128.2.19,99.39,0,64.29,0,28.23,15.07,0,47.12,0,80.13,0,93.29,29.57,93.29,63.53ZM29,64.29c0,28.43,6.87,42,17.93,42,11.26,0,17.36-14.11,17.36-42.35,0-27.47-5.91-42-17.55-42C36.25,21.94,29,35.29,29,64.29Z",
      "M47,27.85h-.39L23,39.11,18.22,17.36l33-15.26H75.07v124H47Z"]; 
    const vDistance = 150;
    const svg = d3.select("svg.large-header-svg");
    svg.insert("defs")
      .insert("clipPath")
        .attr("id", "numerals-mask")
        .insert("rect")
          .attr("x", 53.5)
          .attr("y", 95.65)
          .attr("width", 676)
          .attr("height", 128);
    svg.insert("g")
      .classed("numeral-boxes", true)
      .attr("clip-path", "url(#numerals-mask)")
      .selectAll("g")
      .data(this.data)
      .enter()
        .insert("g")
        .attr("transform", d => `translate(${d.xPos}, ${yPos - vDistance})`)
        .attr("class", (_, i) => `numeral-box index-${i}`)
        .each(function(d) {
          d3.select(this)
            .selectAll("path")
            .data(d.numbers)
            .enter()
            .insert("path")
            .attr("fill", "#ffffff")
            .attr("transform", (_, i) => `translate(0, ${i * vDistance})`)
            .attr("d", n => paths[n]);
        })
    d3.selectAll("g.numeral-box")
      .transition()
        .delay(500)
        .duration(d => d.transition)
        .ease(d3.easeBack.overshoot(1))
        .attr("transform", d => {
          return `translate(${d.xPos}, ${vDistance * -(d.numbers.length - 2) + yPos})`
        });
  };

  data = [
    { 
      numeral: 1,
      xPos: 53.5,
    },
    { 
      numeral: 0,
      xPos: 207.5,
    },
    { 
      numeral: 0,
      xPos: 353.5,
    },
    { 
      numeral: 0,
      xPos: 499.5,
    },
    { 
      numeral: 1,
      xPos: 636.5,
    }
  ];

  constructor() {
    super(...arguments);
    for (const wheel of this.data) {
      wheel.numbers = d3.range(10).map(n => Math.floor(d3.randomUniform(2)()));
      d3.range(d3.randomNormal(32, 8)())
        .map(n => wheel.numbers.push(Math.floor(d3.randomUniform(2)())));
      wheel.numbers.push(wheel.numeral);
      wheel.numbers.push(Math.floor(d3.randomUniform(2)()));
      wheel.transition = Math.floor(d3.randomNormal(2500, 500)());
    }
  }
}
