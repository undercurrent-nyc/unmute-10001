import Component from '@glimmer/component';
import { shuffle } from "../helpers/shuffle";

export default class FooterComponent extends Component {

  orgs = [
    {
      svg: "eunic-logo",
    },
    {
      svg: "flanders-logo",
    },
    {
      svg: "lithuania-logo",
    },
    {
      svg: "estonia-logo",
    },
    {
      svg: "malta-logo",
    },
    {
      svg: "poland-logo",
    },
  ]

  get shuffledOrgs() {
    const austria = {
      svg: "austria-logo",
    }
    let shuffledOrgs = shuffle(this.orgs);
    const austriaIndex = Math.floor(Math.random() * Math.floor(4));
    shuffledOrgs.splice(austriaIndex, 0, austria);
    return shuffledOrgs;
  }
}
