import Component from '@glimmer/component';
import { shuffle } from "../helpers/shuffle";

export default class EmpireStateBuildingComponent extends Component {

  fadeInTetrominoes() {
    const classNames = []
    for (let i = 1; i < 74; i += 1) {
      classNames.push(`tetromino_${i}`);
    }
    const shuffledClasses = shuffle(classNames);
    let fadeTimer = setInterval(() => {
      if(shuffledClasses.length > 0){
        const className = shuffledClasses.pop();
        const tetromino = document.getElementsByClassName(className)[0];
        tetromino.classList.add("opacity-100");
      } else {
        clearInterval(fadeTimer);
      }
    }, 200);
  }
}
