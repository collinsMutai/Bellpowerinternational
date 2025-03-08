import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  currentSlide: number = 0;
  totalSlides: number = 0;
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('prevButton') prevButton!: ElementRef;
  @ViewChild('nextButton') nextButton!: ElementRef;

  slides: HTMLElement[] = [];
  slideInterval: any; // Variable to hold the setInterval function

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Get all slides after view initialization
    this.slides = Array.from(
      this.slider.nativeElement.querySelectorAll('.slider-item')
    );
    this.totalSlides = this.slides.length;

    // Add event listeners for the buttons
    this.addEventListeners();

    // Start the auto slide
    this.startAutoSlide();
  }

  // Add event listeners to next and prev buttons
  private addEventListeners(): void {
    this.prevButton.nativeElement.addEventListener('click', () =>
      this.changeSlide(-1)
    );
    this.nextButton.nativeElement.addEventListener('click', () =>
      this.changeSlide(1)
    );
  }

  // Change slide based on direction
  changeSlide(direction: number): void {
    // Stop the auto slide when manually changing the slide
    clearInterval(this.slideInterval);
    this.startAutoSlide(); // Restart the auto-slide after manual change

    // Remove zoom effect class from the current slide
    this.slides[this.currentSlide].classList.remove('zoom-in');

    // Update the current slide index
    this.currentSlide =
      (this.currentSlide + direction + this.totalSlides) % this.totalSlides;

    // Add zoom effect class to the new slide
    this.slides[this.currentSlide].classList.add('zoom-in');

    // Instantly move to the new slide (without transition)
    this.slider.nativeElement.style.transform = `translateX(-${
      this.currentSlide * 100
    }%)`;
  }

  // Start auto sliding the images every 3 seconds
  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.changeSlide(1); // Move to the next slide
    }, 3000); // Change slide every 3 seconds (3000ms)
  }
}
