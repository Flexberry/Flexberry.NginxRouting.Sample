import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  brandName: DS.attr('string'),
  carBody: DS.attr('i-i-s-nginx-sample-car-type'),
  carDate: DS.attr('date'),
  carNumber: DS.attr('string'),
  sparePartName: DS.attr('string'),
  sparePartProducingCountryName: DS.attr('string'),
  sparePartQuantity: DS.attr('number'),
  sparePartUsed: DS.attr('boolean', { defaultValue: false })
});

export let ValidationRules = {
  brandName: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.brandName.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  carBody: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.carBody.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  carDate: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.carDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  carNumber: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.carNumber.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sparePartName: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.sparePartName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sparePartProducingCountryName: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.sparePartProducingCountryName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sparePartQuantity: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.sparePartQuantity.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  sparePartUsed: {
    descriptionKey: 'models.i-i-s-nginx-sample-car-data.validations.sparePartUsed.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
