import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  storeData: any;
  activeTab = 'all';
  contactForm: FormGroup;
  displayAlert: boolean = false;
  alertClass: string = 'mb-5';
  alertMessage: string = '';

  @Input() messageSuccess: string = 'Votre message a bien été envoyé';
  @Input() messageError: string = 'Une erreur est survenue lors de l\'envoi de votre message';

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() titleClass: string = '';
  @Input() descriptionClass: string = '';
  @Input() formClass: string ='';

  @Input() ctaClass: string = 'text-center text-white mt-4 px-4 py-2 bg-primary border border-primary rounded hover:bg-transparent transition';
  @Input() link: string = '';

  @Input() imgPathUserIconWhite: string = 'assets/images/contact-form-icon/nom_prenom_icon_WHITE.svg';
  @Input() imgPathEmailIconWhite: string = 'assets/images/contact-form-icon/adresse_mail_icon_WHITE.svg';
  @Input() imgPathPhoneIconWhite: string = 'assets/images/contact-form-icon/telephone_icon_WHITE.svg';
  @Input() imgPathCityIconWhite: string = 'assets/images/contact-form-icon/ville_icon_WHITE.svg';
  @Input() imgPathMessageIconWhite: string = 'assets/images/contact-form-icon/message_icon_WHITE.svg';

  @Input() imgClass: string = 'absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none'

  @Input() showName : boolean = true;
  @Input() showEmail : boolean = true;
  @Input() showPhone : boolean = true;
  @Input() showCity : boolean = true;
  @Input() showMessage : boolean = true;

  @Input() inputClass: string = '';

  @Input() labelClass : string = '';
  @Input() nameLabel : string = 'Nom / Prénom';
  @Input() emailLabel : string = 'Email';
  @Input() phoneLabel : string = 'Téléphone';
  @Input() cityLabel : string = 'Ville';
  @Input() messageLabel : string = 'Message';
  

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [this.showName? Validators.required: null]],
      email: ['', this.showEmail? [Validators.required, Validators.email]: null],
      message: ['', this.showMessage? [Validators.required]: null]
    }); 
  }

  onSubmit() {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  const formData = this.contactForm.value;

  const body = new FormData();
  body.append("name", formData.name);
  body.append("email", formData.email);
  body.append("message", formData.message);

  fetch("https://formspree.io/f/xpwjjooq", {
    method: "POST",
    body: body,
    headers: {
      Accept: "application/json"
    }
  }).then(response => {
    if (response.ok) {
      this.alertClass = 'text-primary px-4 py-2 rounded flex gap-2 items-center';
      this.alertMessage = "Message envoyé avec succès ! 🎉";
      this.displayAlert = true;
      this.contactForm.reset();
    } else {
      this.alertClass = 'text-primary px-4 py-2 rounded flex gap-2 items-center';
      this.alertMessage = "Une erreur est survenue ❌. Merci de réessayer.";
      this.displayAlert = true;
    }
  }).catch(error => {
    this.alertClass = 'text-primary px-4 py-2 rounded flex gap-2 items-center';
    this.alertMessage = "Erreur réseau 🌐. Merci de vérifier votre connexion.";
    this.displayAlert = true;
  });
  }
}
