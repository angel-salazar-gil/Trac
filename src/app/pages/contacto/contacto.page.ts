import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ContactService } from './services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  // FormGroup
  public contactForm: FormGroup;

  // Error messages
  public errorMessages = {
    name: [ { type: 'required', message: 'Name is required' } ],
    email: [ { type: 'required', message: 'Email is required' }, { type: 'pattern', message: 'Please enter a valid email' } ],
    message: [ { type: 'required', message: 'Message is required' } ]
  };

  // Constructor
  constructor( private contactService: ContactService ) {
    this.contactForm = this.createForm();
  }

  // Getters of the contactForm
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  createForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      email: new FormControl ('', [Validators.required, Validators.maxLength(70),
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]),
      message: new FormControl ('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  onResetForm() {
    this.contactForm.reset();
  }

  public submit() {
    if (this.contactForm.valid) {
      this.contactService.createMessage(this.contactForm.value);
      Swal.fire({
        icon: 'success',
        title: 'Se ha guardado con exito',
    });
      this.onResetForm();
    }
  }

  ngOnInit() {
  }

}
