import { Serializer as ProducingCountrySerializer } from
  '../mixins/regenerated/serializers/i-i-s-nginx-sample-producing-country';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProducingCountrySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
