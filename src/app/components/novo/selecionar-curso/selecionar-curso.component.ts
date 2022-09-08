import {  Component, ElementRef, OnInit,EventEmitter,OutputDecorator, Output, Input} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators } from '@angular/forms';






@Component({
  selector: 'app-selecionar-curso',
  templateUrl: './selecionar-curso.component.html',
  styleUrls: ['./selecionar-curso.component.scss']
})


export class SelecionarCursoComponent implements OnInit{


  listarCursos:any
 hide:boolean = false
 @Output() cursoEscolhidos = new EventEmitter();
 curso:any

  constructor(private service:BackconnectService,private formBuilder:FormBuilder) {}
   
  

  ngOnInit(): void{
    
     
    this.service.listarCursos().subscribe((res)=>{
      this.listarCursos = res; 
      this.listarCursos = this.listarCursos['Resultado'];

  
     
    }); 

    scrollTo(10, 0);
  }
  
  userForm = new FormGroup({
    'cursos':new FormControl('',Validators.required),
  
  });


  ngSubmit(){
   this.curso = Object.values(this.userForm.value);
   this.curso =  this.curso.toString();
   this.cursoEscolhidos.emit(this.curso);
  
  }
 


}


 