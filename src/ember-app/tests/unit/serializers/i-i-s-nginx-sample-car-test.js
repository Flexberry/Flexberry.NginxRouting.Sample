import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-nginx-sample-car', 'Unit | Serializer | i-i-s-nginx-sample-car', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-nginx-sample-car',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-nginx-sample-car-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
