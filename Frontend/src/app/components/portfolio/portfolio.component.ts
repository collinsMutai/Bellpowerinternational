import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects = [
    {
      image: '/assets/project_kiwira.webp', // Replace with actual image paths
      title: '10 MW ',
      description: 'Solar power plant in Voi',
      details: 'Under development',
    },
    {
      image: '/assets/project_kiwira2.webp', // Replace with actual image paths
      title: '2.5 MW  ',
      description: 'Nyaururu Small Hydro power plant in Bomet county',
      details: 'Under development',
    },

    // Add more projects as needed
  ];

  // Modal control
  showModal = false;
  selectedProject: any = null;

  // Show the modal with project details
  openModal(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
  }
}
