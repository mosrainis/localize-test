import { Locale } from './supported-locales';


class LocaleStorage {
  #locale: Locale = 'en';

  getLocale(): Locale {
    return this.#locale;
  }

  setLocale(locale: Locale) {
    this.#locale = locale;
    globalThis.localStorage.setItem('locale', locale);
  }
}

export const localeStorage = new LocaleStorage();
