import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { I18nRouteReuseStrategy } from './service/i18n-route-reuse.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    { provide: RouteReuseStrategy, useClass: I18nRouteReuseStrategy }
  
  ],
};
