import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [{ value: 'Felipe', disabled: true }, Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  // cadastroForm = new FormGroup({
  //   name: new FormControl({ value: 'Maccheri', disabled: true }, Validators.required),
  //   email: new FormControl('luto@gft.com', Validators.required),
  //   addressInfo: new FormGroup({
  //     zipcode: new FormControl('', Validators.required),
  //     address: new FormControl('', Validators.required),
  //     number: new FormControl('', Validators.required),
  //     city: new FormControl('', Validators.required),
  //     state: new FormControl('', Validators.required),
  //   })
  // });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm);
  }

}
