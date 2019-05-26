import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | createModal', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:create-modal');
    assert.ok(service);
  });
});
