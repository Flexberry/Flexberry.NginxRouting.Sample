import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNginxSampleBrandLForm from './forms/i-i-s-nginx-sample-brand-l';
import IISNginxSampleCarLForm from './forms/i-i-s-nginx-sample-car-l';
import IISNginxSampleProducingCountryLForm from './forms/i-i-s-nginx-sample-producing-country-l';
import IISNginxSampleBrandEForm from './forms/i-i-s-nginx-sample-brand-e';
import IISNginxSampleCarEForm from './forms/i-i-s-nginx-sample-car-e';
import IISNginxSampleProducingCountryEForm from './forms/i-i-s-nginx-sample-producing-country-e';
import IISNginxSampleBrandModel from './models/i-i-s-nginx-sample-brand';
import IISNginxSampleCarDataModel from './models/i-i-s-nginx-sample-car-data';
import IISNginxSampleCarModel from './models/i-i-s-nginx-sample-car';
import IISNginxSampleProducingCountryModel from './models/i-i-s-nginx-sample-producing-country';
import IISNginxSampleSparePartModel from './models/i-i-s-nginx-sample-spare-part';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-nginx-sample-brand': IISNginxSampleBrandModel,
    'i-i-s-nginx-sample-car-data': IISNginxSampleCarDataModel,
    'i-i-s-nginx-sample-car': IISNginxSampleCarModel,
    'i-i-s-nginx-sample-producing-country': IISNginxSampleProducingCountryModel,
    'i-i-s-nginx-sample-spare-part': IISNginxSampleSparePartModel
  },

  'application-name': 'Apache Nginx Sample',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Apache Nginx Sample',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Apache Nginx Sample',
          title: 'Apache Nginx Sample'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'ni-fi-sample': {
          caption: 'NginxSample',
          title: 'NginxSample',
          'i-i-s-nginx-sample-brand-l': {
            caption: 'Brand',
            title: ''
          },
          'i-i-s-nginx-sample-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-nginx-sample-producing-country-l': {
            caption: 'Producing country',
            title: ''
          }
        },
        'add-new-data': 'Добавить тестовые данные'
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-nginx-sample-brand-l': IISNginxSampleBrandLForm,
    'i-i-s-nginx-sample-car-l': IISNginxSampleCarLForm,
    'i-i-s-nginx-sample-producing-country-l': IISNginxSampleProducingCountryLForm,
    'i-i-s-nginx-sample-brand-e': IISNginxSampleBrandEForm,
    'i-i-s-nginx-sample-car-e': IISNginxSampleCarEForm,
    'i-i-s-nginx-sample-producing-country-e': IISNginxSampleProducingCountryEForm
  },

});

export default translations;
