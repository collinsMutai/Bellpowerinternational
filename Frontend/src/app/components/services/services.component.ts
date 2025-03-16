import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Hydro Turbines',
      description:
        'We supply high-quality hydro turbines for various hydropower projects. Our turbines are durable, efficient, and designed for long-term performance.',
    },
    {
      title: 'Electrical Components',
      description:
        'We provide electrical components such as switchgears, transformers, and circuit breakers, ensuring high performance and safety in electrical systems.',
    },
  ];
}
