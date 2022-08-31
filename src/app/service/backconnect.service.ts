import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BackconnectService {
   
  urlDataRequest = 'http://localhost:8080/api/dataRequest';
  urlGerarDiplomado = 'http://localhost:8080/api/gerardiplomado?id'; 
  urlDiplipomados = 'http://localhost:8080/api/listardiplomados';


  dataRequest():Observable<any>{
     return this._http.get(`${this.urlDiplipomados}`);
  }

gerarDiplomado():Observable<any>{
  console.log("conectado");
    return this._http.get(`${this.urlGerarDiplomado}`);
 }

  constructor(private _http:HttpClient) { }
}
