import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, BaseRouteReuseStrategy } from '@angular/router';
import { localeProvider } from './locale.provider';

@Injectable({ providedIn: 'root' })
export class I18nRouteReuseStrategy extends BaseRouteReuseStrategy {
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {    
    return localeProvider.state === 'loading'
      ? false
      : super.shouldReuseRoute(future, curr)
    ;
  }
}
