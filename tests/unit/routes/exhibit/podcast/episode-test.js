import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | exhibit/podcast/episode', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:exhibit/podcast/episode');
    assert.ok(route);
  });
});
