import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import CarTypeEnum from '../enums/i-i-s-nginx-sample-car-type';

export default FlexberryEnum.extend({
  enum: CarTypeEnum,
  sourceType: 'IIS.NginxSample.CarType'
});
