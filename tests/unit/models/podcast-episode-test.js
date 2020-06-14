import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | podcast episode', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('podcast-episode', {});
    assert.ok(model);
  });
});
