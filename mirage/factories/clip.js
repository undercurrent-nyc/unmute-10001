import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({
  title() {
    return faker.company.catchPhrase();
  },

  fileUrl() {
    return faker.internet.url();
  },

  startTime() {
    return "0:00";
  },

  duration() {
    return "1:00";
  },

  postDate() {
    return faker.date.past();
  },

  thumbnailUrl() {
    return "https://lorempixel.com/640/480/abstract"
  }

});
