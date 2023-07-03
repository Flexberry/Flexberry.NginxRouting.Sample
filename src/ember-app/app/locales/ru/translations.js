import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Apache Nginx Sample',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Apache Nginx Sample',
          title: 'Apache Nginx Sample'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
