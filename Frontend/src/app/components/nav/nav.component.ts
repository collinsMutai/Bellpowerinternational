import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for built-in directives like *ngIf, *ngFor
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  // Method to toggle the mobile menu visibility
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Method to close the menu and navigate to the desired section or route
  closeMenuAndNavigate(section: string): void {
    // Close the mobile menu
    this.menuOpen = false;

    // If you are using anchor links for navigation
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // If you want to navigate to a route (e.g., '/home', '/about')
    // this.router.navigate([`/${section}`]);
  }
}
