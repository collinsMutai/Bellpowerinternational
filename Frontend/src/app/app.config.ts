import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; // Import HashLocationStrategy

import { routes } from './app.routes'; // Assuming you have your routes defined here

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Zone change detection
    provideRouter(routes), // Provide router with the routes
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Provide HashLocationStrategy
  ],
};
