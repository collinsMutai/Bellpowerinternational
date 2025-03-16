import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  images = [
    { src: '/assets/gallery1.jpeg' },
    { src: '/assets/gallery2.jpeg' },
    { src: '/assets/gallery3.jpeg' },
    { src: '/assets/gallery4.jpeg' },
    { src: '/assets/gallery5.jpeg' },
    { src: '/assets/gallery6.jpeg' },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery1.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery2.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery3.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery4.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery5.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery6.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery7.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery8.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery9.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery10.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery11.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery12.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery13.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery14.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Hydromechanicalequipments/hydromechanicalequipment_gallery15.jpeg',
      description: 'Hydro mechanical equipment',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery1.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery2.jpeg',
      description: 'Electrical component',
    },
    // {
    //   src: '/assets/Electricalcomponents/electricalcomponentsgallery3.jpeg',
    //   description: 'Electrical component',
    // },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery4.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery5.jpeg',
      description: 'Electrical component',
    },
    // {
    //   src: '/assets/Electricalcomponents/electricalcomponentsgallery5.jpeg',
    //   description: 'Electrical component',
    // },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery6.jpeg',
      description: 'Electrical component',
    },
    // {
    //   src: '/assets/Electricalcomponents/electricalcomponentsgallery7.jpeg',
    //   description: 'Electrical component',
    // },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery8.jpeg',
      description: 'Electrical component',
    },
  ];
}
