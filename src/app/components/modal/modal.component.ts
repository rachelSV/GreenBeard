import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() descriptionShort: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  
  @Input() buttonClass: string = 'absolute top-2 right-2 text-black text-xl';
  @Input() imageClass: string = 'mx-auto max-h-100 mb-4 p-2 rounded';
  @Input() titleClass: string = 'text-2xl font-semibold mb-4 text-primary';
  @Input() descriptionClass: string = 'text-black mb-4';
  @Input() descriptionShortClass: string = 'text-black/70 mb-4';

  @Output() isOpenChange = new EventEmitter<boolean>();

  closeModal() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
    document.body.style.overflow = ''; // réactive le scroll
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
