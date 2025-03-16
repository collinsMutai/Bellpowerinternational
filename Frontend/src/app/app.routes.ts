import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'gallery', component: ImageGalleryComponent }, // This route shows the default gallery
  { path: 'gallery/:section', component: ImageGalleryComponent }, // This route handles dynamic sections
];
