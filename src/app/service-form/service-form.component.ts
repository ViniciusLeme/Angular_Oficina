import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {

  
  serviceForm = this.sf.group({
    name: [''],
    description: [''],
    value: [null],
  });

  constructor(private sf: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('https://httpbin.org/post', this.serviceForm.value)
      .subscribe(data => console.log(data));
 }

}
