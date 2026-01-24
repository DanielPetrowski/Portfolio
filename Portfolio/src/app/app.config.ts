import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection ,inject } from '@angular/core';
import {provideHttpClient} from "@angular/common/http";
import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
         prefix: './i18n/',  
  suffix: '.json'
      })
    }),
    provideRouter(routes)
  ]
};
