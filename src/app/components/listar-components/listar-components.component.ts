import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-components',
  templateUrl: './listar-components.component.html',
  styleUrls: ['./listar-components.component.scss']
})
export class ListarComponentsComponent implements OnInit {

  title = 'Listar Cursos';

  //public listarcursos$: Observable<any>;

name: string = "Hugo Whesley";
idade: number = 47;
setor: string = "DTI";

botaoClicado(){
  alert('Botão clicado!');
}

onKeyUp(evento: KeyboardEvent){
    console.log(evento);
}

  constructor(private http: HttpClient) { 


    
  }

  ngOnInit(): void {
    //this.listarcursos$ = this.http.get("localhost:8080/api/listarcursos");
  }

}
