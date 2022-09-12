import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  
  @Input() curso:any;
  @Input() enable2:any;
  
  Diplomados:any;
  cursoSelecionado:any
  
  

  constructor(private service:BackconnectService) { }
  

  ngOnChanges() {
    
    this.service.listarDiplomados().subscribe((res):any=>{
     this.Diplomados = res;

     console.log(this.Diplomados)
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
           this.cursoSelecionado = this.Diplomados[i];
            console.log(this.cursoSelecionado);
         } else{
           return 0
         }
       }
   });

    
  }

  ngOnInit(): void {
    scrollTo(10, 0);
  }


  refresh(){
    location.reload()
  }

}
