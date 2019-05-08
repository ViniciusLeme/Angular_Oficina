import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface Combos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service-order-form',
  templateUrl: './service-order-form.component.html',
  styleUrls: ['./service-order-form.component.scss']
})
export class ServiceOrderFormComponent implements OnInit {

  serviceOrderForm = this.sof.group({
    car: [null],
    service: [null],
    quantity: [null],
  });

  cars: Combos[] = [
    {value: 'Palio', viewValue: 'Palio'},
    {value: 'Celta', viewValue: 'Celta'},
  ]

  services: Combos[] = [
    {value: 'Servico1', viewValue: 'Servico1'},
    {value: 'Servico2', viewValue: 'Servico2'},
  ]

  constructor(private sof: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post('https://httpbin.org/post', this.serviceOrderForm.value)
      .subscribe(data => console.log(data));
 }

}
