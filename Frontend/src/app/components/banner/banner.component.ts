import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input() backgroundImageUrl: string = ''; // URL for the background image
  @Input() title: string = ''; // Title of the page
  @Input() breadcrumbs: string[] = []; // Breadcrumb array

  // Example usage of this component can be set from the parent component
}