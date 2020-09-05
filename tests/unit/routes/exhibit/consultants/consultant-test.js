import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exhibit/consultants/consultant', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exhibit/consultants/consultant');
    assert.ok(route);
  });
});
