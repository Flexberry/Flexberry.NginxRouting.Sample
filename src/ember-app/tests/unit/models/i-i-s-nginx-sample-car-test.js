import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-nginx-sample-car', 'Unit | Model | i-i-s-nginx-sample-car', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-nginx-sample-brand',
    'model:i-i-s-nginx-sample-car-data',
    'model:i-i-s-nginx-sample-car',
    'model:i-i-s-nginx-sample-producing-country',
    'model:i-i-s-nginx-sample-spare-part',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
