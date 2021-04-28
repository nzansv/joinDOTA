import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GteValidatorService} from './gte-validator.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl()
  });

  constructor(private gteValidatorService: GteValidatorService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.email,
        Validators.required]),
    });
  }

  get email(): any {
    return this.contactForm.get('email');
  }

  onSubmit(): void {
    console.log('onSubmit clicked');
    console.log(this.contactForm);
    console.log(this.contactForm.valid);
  }


}
