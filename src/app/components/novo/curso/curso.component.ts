import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackconnectService } from 'src/app/service/backconnect.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  
  @Input() curso:any;
  @Input() enable2:any;
  @Output() buttonClick3 = new EventEmitter();
  enable3:boolean = false; 

  Diplomados:any;
  cursoSelecionado:any

  constructor(private service:BackconnectService) { }
  

  ngOnChanges() {
    
    this.service.listarDiplomados().subscribe((res):any=>{
     this.Diplomados = res;

     
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
           this.cursoSelecionado = this.Diplomados[i];
           if(i<10){
            break
           }
         }
         
       }
   });

    
  }

  userForm = new FormGroup({
    'nome-curso': new FormControl('',Validators.required),
    'codigo-mec': new FormControl('',Validators.required),
    'nome-habilitacao': new FormControl('',Validators.required),
    'titulo-conferido': new FormControl('',Validators.required),
    'grau-conferido': new FormControl('',Validators.required),
    'modalidade': new FormControl('',Validators.required),
    'colacao': new FormControl('',Validators.required),
    'cep-curso': new FormControl('',Validators.required),
    'logradouro-curso': new FormControl('',Validators.required),
    'numero-curso': new FormControl('',Validators.required),
    'bairro-curso': new FormControl('',Validators.required),
    'estado-curso': new FormControl('',Validators.required),
    'cidade-curso': new FormControl('',Validators.required),
  });
  
  ngSubmit(){
    this.enable2 = false;
    this.enable3 = this.enable3 == false ? true : false;
    this.buttonClick3.emit(this.enable3)
  }

  ngOnInit(): void {
    scrollTo(10, 0);
  }


  refresh(){
    location.reload()
  }

}
