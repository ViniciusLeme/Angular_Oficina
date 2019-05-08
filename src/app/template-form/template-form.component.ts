import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CepService } from '@shared/services/cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    name: 'Maccheri',
    email: 'luto@gft.com',
    zipcode: '',
    address: '',
    number: '',
    city: '',
    state: '',
  };

  constructor(private http: HttpClient, private cepService: CepService) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {
    this.http.post('https://httpbin.org/post', form.value)
      .subscribe(data => console.log(data));
  }

  public buscarCEP(cep: string, form: NgForm): void {
    this.cepService.buscarCEP(cep)
      .subscribe(data => this.popularEndereco(data, form));
  }

  private popularEndereco(data, form: NgForm): void {
    // form.setValue({
    //   'name': form.value.name,
    //   'email': form.value.email,
      // 'addressInfo': {
      //   'zipcode': data.cep,
      //   'address': data.logradouro,
      //   'number': form.value.addressInfo.number,
      //   'city': data.localidade,
      //   'state': data.uf,
      // }
    // });

    // somente o que precisamos atualizar
    form.form.patchValue({
      'addressInfo': {
        'zipcode': data.cep,
        'address': data.logradouro,
        'city': data.localidade,
        'state': data.uf,
      }
    })
  }

}
