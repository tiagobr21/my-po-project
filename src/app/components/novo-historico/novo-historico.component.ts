import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-historico',
  templateUrl: './novo-historico.component.html',
  styleUrls: ['./novo-historico.component.scss']
})
export class NovoHistoricoComponent implements OnInit {

  info:any

  constructor() { }

  ngOnInit(): void {
  }

  view(info:any){
    this.info = info;

    console.log(this.info);
  }
}
