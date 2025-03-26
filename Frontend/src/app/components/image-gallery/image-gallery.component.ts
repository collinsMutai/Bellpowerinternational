import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  images = [
    {
      src: '/assets/gallery1.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
    {
      src: '/assets/gallery2.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
    {
      src: '/assets/gallery3.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
    {
      src: '/assets/gallery4.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
    {
      src: '/assets/gallery5.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
    {
      src: '/assets/gallery6.jpeg',
      description: 'The signing of Voi solar tenure project',
    },
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
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery4.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery5.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery6.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/Electricalcomponents/electricalcomponentsgallery8.jpeg',
      description: 'Electrical component',
    },
    {
      src: '/assets/solar_power_plant_voi_1.jpeg',
      description: 'Solar power plant in Voi',
    },
    {
      src: '/assets/solar_power_plant_voi_2.jpeg',
      description: 'Solar power plant in Voi',
    },
    {
      src: '/assets/solar_power_plant_voi_3.jpeg',
      description: 'Solar power plant in Voi',
    },
    {
      src: '/assets/solar_power_plant_voi_4.jpeg',
      description: 'Solar power plant in Voi',
    },
    {
      src: '/assets/solar_power_plant_voi_5.jpeg',
      description: 'Solar power plant in Voi',
    },
  ];

  filteredImages: any[] = [];
  section: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capture the section from the route parameter (Electrical or Hydromechanical)
    this.route.paramMap.subscribe((params) => {
      this.section = params.get('section') || ''; // Get the section from the URL
      this.filterImages(); // Filter the images based on the section
    });
  }

  filterImages(): void {
    // If there's no section in the URL or it's empty, show all images (including those with descriptions)
    if (this.section === '' || this.section === null) {
      this.filteredImages = this.images;
      console.log('this.filteredImages', this.filteredImages);
    } else if (this.section === 'Electrical') {
      // If the section is "Electrical", show only Electrical components
      this.filteredImages = this.images.filter(
        (image) => image.description === 'Electrical component'
      );
    } else if (this.section === 'Hydromechanical') {
      // If the section is "Hydromechanical", show only Hydro mechanical equipment
      this.filteredImages = this.images.filter(
        (image) => image.description === 'Hydro mechanical equipment'
      );
    }
  }
}
