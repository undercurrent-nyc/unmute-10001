import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({

  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
  },

  slug(i) {
    return `artist-${i}`;
  },


  bio() {
    return faker.lorem.paragraph();
  },

  avatarUrl() {
    return faker.internet.avatar();
  },

  websiteUrl() {
    return faker.internet.url();
  }
});
