import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  
  userFiltro:string = '';

  infos = [
    {
      Nome:'Karla Brilhante',
      Email:'karla.brilhante@fametro.edu.br',
      Ativo:'Sim',
      Criadoem:'07/12/2021 16:50'
    },
    {
      Nome:'Hugo Santos',
      Email:'hugo.santos@fametro.edu.br',
      Ativo:'Não',
      Criadoem:'07/12/2021 17:06'
    }
  ]
   
  constructor() { }

  ngOnInit(): void {
     scrollTo(10, 0);


  }

}
