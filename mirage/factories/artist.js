import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({

  slug() {
    faker.helpers.slugify(`${this.firstName} ${this.lastName}`);
  },

  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
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
