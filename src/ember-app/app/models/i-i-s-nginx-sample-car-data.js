import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as CarDataMixin
} from '../mixins/regenerated/models/i-i-s-nginx-sample-car-data';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(CarDataMixin, Validations, {
});

export default Model;
