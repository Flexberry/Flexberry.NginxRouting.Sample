import { Serializer as BrandSerializer } from
  '../mixins/regenerated/serializers/i-i-s-nginx-sample-brand';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BrandSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
