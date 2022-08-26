import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  
  filtroConforme:any;
   
  constructor() { }

  ngOnInit(): void {

    scrollTo(10, 0);
  }

}
