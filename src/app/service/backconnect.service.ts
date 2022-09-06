import { Injectable,EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackconnectService {
  
 @Output() emitirCursoSelecionado:EventEmitter<string> = new EventEmitter();


  urlDataRequest = 'http://localhost:8080/api/dataRequest';
  // urlGerarDiplomado = 'http://localhost:8080/api/gerardiplomado?id'; 
  urlDiplipomados = 'http://localhost:8080/api/listardiplomados';
  urlCursos = 'http://localhost:8080/api/listarcursos';


  listarDiplomados():Observable<any>{
     return this._http.get(`${this.urlDiplipomados}`);
  }

/* gerarDiplomado():Observable<any>{
  console.log("conectado");
    return this._http.get(`${this.urlGerarDiplomado}`);
 } */

 listarCursos():Observable<any>{

    return this._http.get(`${this.urlCursos}`);
  
 }
 
 cursoEscolhido(curso:any){
  this.emitirCursoSelecionado.emit(curso);
 }


  constructor(private _http:HttpClient) { }
}
