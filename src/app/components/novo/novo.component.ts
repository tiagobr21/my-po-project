import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {
  
  enable:boolean = false;
  enable2:boolean = false;
  enable3:boolean = false;
  enable4:boolean = false;
  enable5:boolean = false;
  alunos:any;
  alunos_assinar:any;
  curso:any;
  backPage:any;
  showPage:any;




  constructor() { }

  ngOnInit(): void {
  
  }

 

  show(show:any){
   this.showPage = show

  }


  back(back:any){
    this.backPage = back;
   
  }

  cursoSelecionado(curso:any){
    this.curso = curso


  }

  alunosSelecionados(alunos:any){
   this.alunos = alunos
  
  }

  alunosAssinar(alunos_assinar:any){
    this.alunos_assinar = alunos_assinar
   
   }

  handleButtonClick(value:any){
    this.enable = value
     
  }

  handleButtonClick2(value2:any){
    this.enable2 = value2
     
  }

  
  handleButtonClick3(value3:any){
    this.enable3 = value3
     
  }

  handleButtonClick4(value4:any){
    this.enable4 = value4
     
  }

  handleButtonClick5(value5:any){
    this.enable5 = value5;
     
  }

}





























