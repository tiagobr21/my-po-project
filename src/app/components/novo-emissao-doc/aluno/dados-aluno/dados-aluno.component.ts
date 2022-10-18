import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.component.html',
  styleUrls: ['./dados-aluno.component.scss']
})
export class DadosAlunoComponent implements OnInit {
  

  @Input() info:any

  constructor() { }

  ngOnInit(): void {
  
  }

    
  ngOnChanges() {
   
  }
}
