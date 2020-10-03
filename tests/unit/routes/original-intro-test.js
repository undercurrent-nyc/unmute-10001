import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | original_intro', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:original-intro');
    assert.ok(route);
  });
});
