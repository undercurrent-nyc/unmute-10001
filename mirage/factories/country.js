import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({
  orgName() {
    return "Generic Cultural Org";
  },

  countryName() {
    return "Generic State";
  },

  locale() {
    const country = faker.random.locale();
    return `${country}-${country}`;
  },

  description() {
    return faker.lorem.paragraph();
  },

  website() {
    return faker.internet.url();
  },

  logoSvgName() {
    return "random-cultural-org";
  },

  logoUrl() {
    return "http://lorempixel.com/640/320/abstract/";
  },

  flagUrl() {
    return "https://www.countryflags.io/eu/flag/64.png";
  }
});
