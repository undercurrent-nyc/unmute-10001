import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exhibit/podcast', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exhibit/podcast');
    assert.ok(route);
  });
});
