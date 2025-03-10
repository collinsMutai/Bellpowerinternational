import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { NavComponent } from "../nav/nav.component";
import { MissionComponent } from "../mission/mission.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ImageSliderComponent, NavComponent, MissionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
