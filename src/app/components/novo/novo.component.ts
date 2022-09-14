import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {
  
  enable:boolean = false
  enable2:boolean = false
  enable3:boolean = false
  curso:any
  backPage:any
  showPage:any




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

  handleButtonClick(value:any){
    this.enable = value
     
  }

  handleButtonClick2(value2:any){
    this.enable2 = value2
     
  }

  
  handleButtonClick3(value3:any){
    this.enable3 = value3
     
  }

}
