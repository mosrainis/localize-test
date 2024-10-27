import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { setLocaleData } from '../service/set-locale-data';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Locale } from '../service/supported-locales';
import { localeProvider } from '../service/locale.provider';

@Component({
  templateUrl: './test.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink,
    RouterLinkActive,
    RouterOutlet,]
})
export class TestComponent {
  #router = inject(Router);

  readonly translations = {
    title: $localize`:@@title:Lovely English Title`,
  };

  async handleLocaleChange(locale: Locale) {
    localeProvider.state = 'loading';

    await setLocaleData(locale);

    await this.#router.navigateByUrl(this.#router.url, {
      onSameUrlNavigation: 'reload'
    });

    localeProvider.state = 'translated';
  }
  
}
