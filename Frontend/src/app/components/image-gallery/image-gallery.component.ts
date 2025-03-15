import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  images = [
    { src: 'assets/gallery1.jpeg', description: 'Image 1' },
    { src: 'assets/gallery2.jpeg', description: 'Image 1' },
    { src: 'assets/gallery3.jpeg', description: 'Image 1' },
    { src: 'assets/gallery4.jpeg', description: 'Image 1' },
    { src: 'assets/gallery5.jpeg', description: 'Image 1' },
    { src: 'assets/gallery6.jpeg', description: 'Image 1' },
   
  ];
}
