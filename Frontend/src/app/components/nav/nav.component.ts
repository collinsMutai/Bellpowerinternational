import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  menuOpen = false;

  // Method to toggle the mobile menu visibility
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
