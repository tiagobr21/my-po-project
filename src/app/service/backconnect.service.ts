import { Injectable,EventEmitter, Output } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable,throwError} from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackconnectService {
  

  urlDataRequest = 'http://localhost:8080/api/v1/dataRequest';
  // urlGerarDiplomado = 'http://localhost:8080/api/gerardiplomado?id'; 
  urlDiplipomados = 'http://localhost:8080/api/v1/diploma/listardiplomados/far01';
  urlCursos = 'http://localhost:8080/api/v1/diploma/listarcursos';
  urlHustorico = 'http://localhost:8080/api/v1/diploma/datarequesthistorico/2021448';

  listarDiplomados():Observable<any>{
     return this._http.get(`${this.urlDiplipomados}`).pipe(
      catchError((error, caught) => {
       console.log('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
       return error
      }))
  
 }
  

 listarHistorico():Observable<any>{
  return this._http.get(`${this.urlHustorico}`).pipe(
   catchError((error, caught) => {
    console.log('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
    return error
   }))

}



/* gerarDiplomado():Observable<any>{
  console.log("conectado");
    return this._http.get(`${this.urlGerarDiplomado}`);
 } */

 listarCursos():Observable<any>{

    return this._http.get(`${this.urlCursos}`).pipe(
      catchError((error, caught) => {
        alert('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
       return error
      }))
  
 }
 


  constructor(private _http:HttpClient) { }
}
