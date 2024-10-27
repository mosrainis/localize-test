
import { localeStorage } from './local-storage.service';
import { Locale } from './supported-locales';

class LocaleProvider extends String {
  state: 'translated' | 'loading' = 'translated';

  override toString(): Locale {
    return localeStorage.getLocale();
  }

  override valueOf(): Locale {
    return this.toString();
  }
}

export const localeProvider = new LocaleProvider();
