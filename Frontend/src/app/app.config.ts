import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common'; // Use PathLocationStrategy instead of HashLocationStrategy

import { routes } from './app.routes'; // Assuming you have your routes defined here

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Zone change detection
    provideRouter(routes), // Provide router with the routes
    { provide: LocationStrategy, useClass: PathLocationStrategy }, // Use PathLocationStrategy for path-based routing
  ],
};
