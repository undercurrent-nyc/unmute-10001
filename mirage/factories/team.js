import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({

  name(i) {
    return `Team ${i}`;
  },

  slug() {
    return faker.slugify(this.name);
  },

  tetrominoSvg() {
    return faker.lorem.sentence();
  },

  tetrominoUrl() {
    return faker.image.cats();
  },

  description() {
    return faker.lorem.paragraph();
  },

  projectTitle() {
    return faker.company.catchPhrase();
  },

});
