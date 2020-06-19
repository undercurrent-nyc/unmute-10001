import Component from '@glimmer/component';
import * as d3 from "d3";
// import { shuffle } from "../helpers/shuffle";

export default class EmpireStateBuildingComponent extends Component {

  fadeInTetrominoes() {
    d3.select(".empire_state_tetrominoes")
      .selectAll("g")
      .style("opacity", 0.0);
    let tetrominoIndices = d3.shuffle(d3.range(1, 74));
    let fadeTimer = setInterval(() => {
      if(tetrominoIndices.length > 0){
        let opacity = d3.randomNormal(75, 10)()/100;
        d3.select(`.tetromino_${tetrominoIndices.pop()}`)
          .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .style("opacity", () => {
              if(opacity >= 1) {
                return 1;
              }
              return opacity;
            })
      } else {
        clearInterval(fadeTimer);
        d3.select(".empire_state_tetrominoes")
          .selectAll("g")
          .transition()
            .duration(500)
            .ease(d3.easeLinear)
            .style("opacity", 1);
      }
    }, 200);
  }
}
