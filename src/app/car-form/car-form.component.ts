import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface Owner {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carForm = this.cf.group({
    plate: [''],
    brand: [''],
    model: [''],
    color: [''],
    year: [null],
    owner: [null],
  });

  owners: Owner[] = [
    {value: 'Vinicius', viewValue: 'Vinicius'},
    {value: 'Leonardo', viewValue: 'Leonardo'},
    {value: 'Paulo', viewValue: 'Paulo'}
  ]

  constructor(private cf: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
     this.http.post('https://httpbin.org/post', this.carForm.value)
       .subscribe(data => console.log(data));
  }

}
