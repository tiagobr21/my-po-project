import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {
  
  enable:boolean = false
  curso:any

  constructor() { }

  ngOnInit(): void {
  }

  cursoSelecionado(curso:any){
    this.curso = curso
    scrollBy(0,200);

  }

  handleButtonClick(value:any){
    this.enable = value

  }

}
