import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: ImageGalleryComponent }
];
