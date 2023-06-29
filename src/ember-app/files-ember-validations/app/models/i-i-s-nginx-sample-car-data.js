import {
  defineNamespace,
  Model as CarDataMixin
} from '../mixins/regenerated/models/i-i-s-nginx-sample-car-data';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(CarDataMixin, {
});

defineNamespace(Model);

export default Model;
