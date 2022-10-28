import { Injectable,EventEmitter, Output } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable,throwError} from "rxjs";
import { catchError } from 'rxjs/operators';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ServererrorComponent } from '../components/errorsmensage/servererror/servererror.component';

@Injectable({
  providedIn: 'root'
})
export class BackconnectService {


  //Diploma  
  
  urlCursos = 'api/api/v1/diploma/listarcursos';
  urlDiplipomado = 'api/api/v1/diploma/listardiplomado/0021304';
  urlDiplipomados = 'api/api/v1/diploma/listardiplomados/adm01';
 
  urlTurma = 'api/api/v1/diploma//far01/0021304';
  urlGerarDiplomado = 'api/api/v1/diploma/gerardiplomado'; 
  urlGerarDiplomados = 'api/api/v1/diploma/gerardiplomados/adm01'; 
  urlGenitores = 'api/api/v1/diploma/listargenitores/0021304';
  urlProfessores = 'api/api/v1/diploma//listarprofessores/0021304';

  urlDatarequest = 'api/api/v1/diploma/datarequest/0021304';
  urlGerarDiplomado2 ='api/api/v1/diploma//gerardiplomado1041';
  urlAdduser = 'api/api/v1/diploma/adduser';
  urlValidadoxml = 'api/api/v1/diploma/validadorxml';
  urlPdf = 'api/api/v1/diploma/visualizarpdf';
   
  //Historico
  
  urlHistorico = 'api/api/v1/diploma/listardiplomadohistorico/0021304';
  urlAtivComple = 'api/api/v1/diploma/listarativcomplementares/0021304';
  urlEstagio = 'api/api/v1/diploma/listarestagios/0021304';
  urlSituacaoEnade = 'api/api/v1/diploma/listarsituacaoenade/0021304';
  urlSitacaoDiscente = 'api/api/v1/diploma/listarsituacoesdiscentes/0021304';
  urlHistoricoAcademico = 'api/api/v1/diploma/listarhistorico/0021304';
  urlDataRequestHis ='api/api/v1/diploma/datarequesthistorico/0021304';

  listarDiplomado():Observable<any>{
     return this._http.get(`${this.urlDiplipomado}`)
     /* .pipe(
      catchError((error, caught) => {
        const dialogConfig = this.dialog.open(ServererrorComponent,{
          width:'600px'
        })
        setTimeout(()=>{
          window.location.reload();
       }, 10000);
       return error
      })) */
  
 }

 listarDiplomados():Observable<any>{
  return this._http.get(`${this.urlDiplipomados}`)
  /* .pipe(
   catchError((error, caught) => {
     const dialogConfig = this.dialog.open(ServererrorComponent,{
       width:'600px'
     })
     setTimeout(()=>{
       window.location.reload();
    }, 10000);
    return error
   })) */

}
 
gerarDiploma(Ra:any):Observable<any>{
  let Ras = Ra;
  console.log( Ras )
  return this._http.get(`${this.urlGerarDiplomado}/${Ras}`)

  /* .pipe(
   catchError((error, caught) => {
     const dialogConfig = this.dialog.open(ServererrorComponent,{
       width:'600px'
     })
     setTimeout(()=>{
       window.location.reload();
    }, 10000);
    return error
   })) */

}

gerarDiplomados():Observable<any>{

  return this._http.get(`${this.urlGerarDiplomados}`).pipe(
   catchError((error, caught) => {
     const dialogConfig = this.dialog.open(ServererrorComponent,{
       width:'600px'
     })
     setTimeout(()=>{
       window.location.reload();
    }, 10000);
    return error
   })) 

}

 listarDataRequestHis():Observable<any>{
  return this._http.get(`${this.urlDataRequestHis}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}


 listarHistorico():Observable<any>{
  return this._http.get(`${this.urlHistorico}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}


listarAtivCom():Observable<any>{
  return this._http.get(`${this.urlAtivComple}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}


listarEstagio():Observable<any>{
  return this._http.get(`${this.urlEstagio}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}



listarSitacaoEnade():Observable<any>{
  return this._http.get(`${this.urlSituacaoEnade}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}

listarSitacaoDiscente():Observable<any>{
  return this._http.get(`${this.urlSitacaoDiscente}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px'
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}

listarHistoricoAcademico():Observable<any>{
  return this._http.get(`${this.urlHistoricoAcademico}`)/* .pipe(
   catchError((error, caught) => {
    const dialogConfig = this.dialog.open(ServererrorComponent,{
      width:'600px',
    
    })
    setTimeout(()=>{
      window.location.reload();
   }, 10000);
    return error
   })) */
}


 listarCursos():Observable<any>{
    return this._http.get(`${this.urlCursos}`)/* .pipe(
      catchError((error, caught) => {
        const dialogConfig = this.dialog.open(ServererrorComponent,{
          width:'600px'
        })
        setTimeout(()=>{
          window.location.reload();
       }, 10000);
       return error
      })) */
  
 }
 


  constructor(private _http:HttpClient,private dialog:MatDialog) { }
}
