import {
  defineNamespace,
  defineProjections,
  Model as SparePartMixin
} from '../mixins/regenerated/models/i-i-s-nginx-sample-spare-part';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SparePartMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
