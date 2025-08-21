import { Component, Input } from '@angular/core';
import { FaqItem } from './faq.entity';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  @Input() items: FaqItem[] = [];

  activeQuestion: number | null = null; // par défaut, aucune question ouverte

  // // si je clique sur la question déjà ouverte -> je ferme. // sinon j'ouvre cette question (index)
  toggle(index: number) {
    this.activeQuestion = this.activeQuestion === index ? null : index;
  }

  colors: string[] = [
    'bg-green-100 hover:bg-green-200',
    'bg-pink-100 hover:bg-pink-200',
    'bg-yellow-100 hover:bg-yellow-200',
    'bg-blue-100 hover:bg-blue-200'
  ];
}
