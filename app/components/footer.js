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
      svg: "wallonia-logo",
    },
    {
      svg: "random-cultural-org",
    },
    {
      svg: "random-cultural-org",
    },
    {
      svg: "random-cultural-org",
    },
    {
      svg: "random-cultural-org",
    },
  ]

  get shuffledOrgs() {
    const austria = {
      svg: "austria-logo",
    }
    let shuffledOrgs = shuffle(this.orgs);
    const austriaIndex = Math.floor(Math.random() * Math.floor(5));
    shuffledOrgs.splice(austriaIndex, 0, austria);
    return shuffledOrgs;
  }
}
