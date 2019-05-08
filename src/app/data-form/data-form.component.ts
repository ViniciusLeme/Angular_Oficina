import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '@shared/validators/forbidden-name.validator';
import { CepService } from '@shared/services/cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  cadastroForm = new FormGroup({
    name: new FormControl('Maccheri', [
      Validators.required,
      Validators.pattern(/\D/i),
      forbiddenNameValidator(/bob/i),
    ]),
    email: new FormControl('luto@gft.com', Validators.required),
    addressInfo: new FormGroup({
      zipcode: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    })
  });

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    console.log(this.cadastroForm.value);
    console.log(this.cadastroForm.getRawValue());
  }

  public buscarCEP(): void {
    let { zipcode: cep } = this.cadastroForm.getRawValue().addressInfo;
    this.cepService.buscarCEP(cep).subscribe(data => this.popularEndereco(data));
  }

  private popularEndereco(data): void {
    this.cadastroForm.patchValue({
      'addressInfo': {
        'zipcode': data.cep,
        'address': data.logradouro,
        'city': data.localidade,
        'state': data.uf,
      }
    })
  }

}
