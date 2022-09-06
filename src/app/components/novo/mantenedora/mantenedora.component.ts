import { Component, Input, OnInit } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';

@Component({
  selector: 'app-mantenedora',
  templateUrl: './mantenedora.component.html',
  styleUrls: ['./mantenedora.component.scss']
})
export class MantenedoraComponent implements OnInit {
  
  cursoEscolhido:any
  cursoSelecionado:any
  Diplomados:any
  loading:boolean = false
  
  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
   
    
  
   
    scrollTo(10, 0);
  }

 
  cursos(curso:any){
    this.cursoEscolhido = curso;
      this.service.listarDiplomados().subscribe((res)=>{
        this.Diplomados = res;
        console.log(this.Diplomados)
        this.loading = true;
          for(let i=0;i<this.Diplomados.length;i++){ 
            if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.cursoEscolhido){
              this.cursoSelecionado = this.Diplomados[i];
              console.log( this.cursoSelecionado);
            } 
          }
      }); 
  }
}
  
  
