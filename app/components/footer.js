import Component from '@glimmer/component';
import { shuffle } from "../helpers/shuffle";

export default class FooterComponent extends Component {

  orgs = [
    {
      svg: "eunic-logo",
      website: "https://eunicglobal.eu",
    },
    {
      svg: "flanders-logo",
      website: "https://flandersintheusa.org/",
    },
    {
      svg: "lithuania-logo",
      website: "https:/english.lithuanianculture.lt/",
    },
    {
      svg: "estonia-logo",
      website: "https://kul.ee/en",
    },
    {
      svg: "malta-logo",
      website: "https://artscouncilmalta.org",
    },
    {
      svg: "poland-logo",
      website: "https://www.instytutpolski.pl/newyork/",
    },
  ]

  get shuffledOrgs() {
    const austria = {
      svg: "austria-logo",
      website: "https://www.acfny.org/",
    }
    let shuffledOrgs = shuffle(this.orgs);
    const austriaIndex = Math.floor(Math.random() * Math.floor(4));
    shuffledOrgs.splice(austriaIndex, 0, austria);
    return shuffledOrgs;
  }
}
