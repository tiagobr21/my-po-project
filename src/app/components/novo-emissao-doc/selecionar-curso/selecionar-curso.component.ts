import {  Component, ElementRef, OnInit,EventEmitter,OutputDecorator, Output, Input} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators } from '@angular/forms';






@Component({
  selector: 'app-selecionar-curso',
  templateUrl: './selecionar-curso.component.html',
  styleUrls: ['./selecionar-curso.component.scss']
})


export class SelecionarCursoComponent implements OnInit{
 
 Diplomados:any;
 PeriodoLetivo:any[]=[];
 listarCursos:any;
 hide:boolean = false;
 @Output() cursoEscolhidos = new EventEmitter();
 @Output() periodoEscolhidos = new EventEmitter();
 @Output() loading = new EventEmitter();
 curso:any;
 periodo:any;
 opcoes:any

  constructor(private service:BackconnectService,private formBuilder:FormBuilder) {}
  

  ngOnInit(): void{
    
     
    this.service.listarCursos().subscribe((res)=>{
      this.listarCursos = res; 
      
    }); 

    this.service.listarDiplomados().subscribe((res)=>{
      this.Diplomados = res; 
      for(let i=0;i<this.Diplomados.length;i++){
        this.PeriodoLetivo.push(this.Diplomados[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarSituacaoAtualDiscentePeriodoLetivo);

      }
     
    }); 


    scrollTo(10, 0);
  }
  
  userForm = new FormGroup({
    'cursos':new FormControl('',Validators.required),
    'periodos':new FormControl('',Validators.required),
  
  
  });


  ngSubmit(){
   this.opcoes = this.userForm.value 
   this.curso = this.opcoes.cursos;
   this.periodo = this.opcoes.periodos;

   this.cursoEscolhidos.emit(this.curso); 
   this.periodoEscolhidos.emit(this.periodo); 



  }
 


}


 