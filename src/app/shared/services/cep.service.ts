import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public buscarCEP(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');

    if (cep) {
      const validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
      }
    }
  }
}
