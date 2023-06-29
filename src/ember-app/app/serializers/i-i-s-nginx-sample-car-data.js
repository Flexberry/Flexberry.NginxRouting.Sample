import { Serializer as CarDataSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nginx-sample-car-data';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CarDataSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
