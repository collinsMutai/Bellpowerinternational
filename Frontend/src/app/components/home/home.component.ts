import { Component, HostListener } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { NavComponent } from "../nav/nav.component";
import { MissionComponent } from "../mission/mission.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from "../image-gallery/image-gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ImageSliderComponent,
    NavComponent,
    MissionComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    CommonModule,
    ImageGalleryComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showScroll = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScroll = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
