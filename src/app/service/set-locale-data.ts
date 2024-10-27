import { clearTranslations, loadTranslations } from '@angular/localize';
import { Locale } from './supported-locales';

export const setLocaleData = (locale: Locale): Promise<void> => {  
  $localize.locale = locale;

  clearTranslations();

  return fetch(`/assets/i18n/${locale}.json`)
    .then(response => response.json())
    .catch(error => console.error(error))
    .then(response => {
      loadTranslations(response.translations);
    });
};
