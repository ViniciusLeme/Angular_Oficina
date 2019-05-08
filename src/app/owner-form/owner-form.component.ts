import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss']
})
export class OwnerFormComponent implements OnInit {
  owner: any = {
    name: '',
    cpf: '',
    birthDate: '',
    gender: '',
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {
    this.http.post('https://httpbin.org/post', form.value)
      .subscribe(data => console.log(data));
  }
}
