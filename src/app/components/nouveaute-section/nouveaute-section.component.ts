import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nouveaute-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './nouveaute-section.component.html',
  styleUrl: './nouveaute-section.component.css'
})
export class NouveauteSectionComponent {
  @Input() videoUrl!: string;
  @Input() etapes: string[] = [];
}
