import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { NgFor, NgForOf } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NouveauteSectionComponent } from './components/nouveaute-section/nouveaute-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeaderComponent, 
    CardProjectComponent, 
    NgFor, 
    NgForOf, 
    ModalComponent,
    NouveauteSectionComponent,
    AboutMeComponent,
    FaqComponent,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Greenbeard';

  // Section Nouveautés
  etapes = [
    'assets/images/montures/cerkoeil.jpg',
    'assets/images/montures/cerkoeil1.jpg',
    'assets/images/montures/cerkoeil2.jpg',
    'assets/images/montures/cerkoeil3.jpg'
  ];

  // Section card project
  montures = [
    {
      id: 1,
      nom: 'Cerkoeil',
      description: '',
      image: 'assets/images/montures/cerkoeil.jpg'
    },
    {
      id: 2,
      nom: 'Alisier',
      description: '',
      image: 'assets/images/montures/alisier.jpg'
    },
    {
      id: 3,
      nom: 'Kaktus',
      description: '',
      image: 'assets/images/montures/kaktus.jpg'
    },
    {
      id: 4,
      nom: 'Galaxite',
      description: '',
      image: 'assets/images/montures/galaxite2.jpg'
    }
    ,
    {
      id: 5,
      nom: 'Galaxite',
      description: '',
      image: 'assets/images/montures/galaxite2.jpg'
    }
  ];

  collages = [
    {
      id: 1,
      nom: 'Dune',
      description: '',
      image: 'assets/images/montures/dune.jpg'
    },
    {
      id: 2,
      nom: 'Fly Harlequin',
      description: '',
      image: 'assets/images/montures/fly-harlequin.jpg'
    },
    {
      id: 3,
      nom: 'Tony Harlequin',
      description: '',
      image: 'assets/images/montures/tony-harlequin.jpg'
    },
    {
      id: 4,
      nom: 'Caps New',
      description: '',
      image: 'assets/images/montures/caps.jpg'
    },
  ]

  creations = [
{
      id: 1,
      nom: 'CatEye',
      description: '',
      image: 'assets/images/montures/cateye.jpg'
    },
    {
      id: 2,
      nom: 'Fat Isa',
      description: '',
      image: 'assets/images/montures/fat-isa.jpg'
    },
    {
      id: 3,
      nom: 'T Vi',
      description: '',
      image: 'assets/images/montures/tvi.jpg'
    },
    {
      id: 4,
      nom: 'Tropik Eye',
      description: '',
      image: 'assets/images/montures/tropikeye.jpg'
    },
  ]
  
  // MODAL
  modalOpen = false;
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden'; // empêche le scroll
  }

  items = [
    {
      question: 'Comment on fabrique des lunettes ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question: 'Comment entretenir ses lunettes ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question: 'Quel matériaux sont choisis et pourquoi ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      question: 'Comment obtenir ma paire personnalisée ?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
}
