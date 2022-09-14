
import { Component, OnInit,Input } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  
    
  @Input() curso:any;
  @Input() enable3:any;
  
  Diplomados:any;
  cursoSelecionado:any;
  dadosAlunos:any[]=[];
  teste:any;
  acumulador:any[]=[];
  contador:number=0;
  keys:any
  

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
        scrollTo(10, 0);
    
  }

  
  ngOnChanges() {

  
    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;
      console.log(this.Diplomados)
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
    
           this.cursoSelecionado = this.Diplomados[i];
           
           this.dadosAlunos.push(this.Diplomados[i]);
           
           this.keys = Object.keys(this.dadosAlunos);
           this.contador = this.keys.length/2
          
        }
        
      } 
 
      console.log(  this.dadosAlunos);
      
     });

     

  }
}
