import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
