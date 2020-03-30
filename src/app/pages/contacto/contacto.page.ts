import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  // Get text of the form
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  // error messages
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email' }
    ],
    message: [
      { type: 'required', message: 'Message is required' }
    ]
  };
  // FormGroups
  public contactForm: FormGroup;
  // Constructor
  constructor(private formBuilder: FormBuilder) {
    // Validators
    this.contactForm = formBuilder.group ({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.maxLength(70),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      message: ['', [Validators.required, Validators.maxLength(100)]],
  });
  }

  public submit() {
    console.log(this.contactForm.value);
  }

  ngOnInit() {
  }

}
