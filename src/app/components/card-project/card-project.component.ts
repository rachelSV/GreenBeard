import { NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() title!: string;
  @Input() titleClass = '';
  @Input() description!: string;
  @Input() descriptionClass = '';
  @Input() imageUrl!: string;
  @Input() imageAlt!: string;
  @Input() imageClass = ''; 
  @Input() imageContainerClass = '';
  @Input() containerClass = ''; 
  @Input() buttonText = '';
  @Input() buttonClass = ''; 
  @Input() navigateTo!: string; 
}
