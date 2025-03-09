import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ImageSliderComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
