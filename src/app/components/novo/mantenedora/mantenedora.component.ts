import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators, FormControlName } from '@angular/forms';




@Component({
  selector: 'app-mantenedora',
  templateUrl: './mantenedora.component.html',
  styleUrls: ['./mantenedora.component.scss']
})
export class MantenedoraComponent implements OnInit {

  
 @Output() cursoAtual = new EventEmitter();

 @Output() buttonClick = new EventEmitter();

 enable:boolean = false;
  
  hide:boolean = false
  cursoEscolhido:any
  cursoSelecionado:any
  Diplomados:any
  loading:boolean = false
  ids:any

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
   
    scrollTo(10, 0);
  }

   
 

 
 
  cursos(curso:any):any{
       this.cursoEscolhido = curso
       console.log(this.cursoEscolhido)
       this.service.listarDiplomados().subscribe((res):any=>{
        this.Diplomados = res;
        this.loading = true;
          
          for(let i=0;i<this.Diplomados.length;i++){ 
           
            if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.cursoEscolhido){
          
              this.cursoSelecionado = this.Diplomados[i];
              console.log(this.Diplomados[i]);
              
            }
          }
      });  
  }


  userForm = new FormGroup({
    'curso':new FormControl(null,Validators.required),
    'nome-mantenedora':new FormControl(null,Validators.required),
    'razao-mantenedora':new FormControl(null,Validators.required),
    'cnpj-mantenedora':new FormControl(null,Validators.required),
    'cep-mantenedora':new FormControl(null,Validators.required),
    'logradouro-mantenedora':new FormControl(null,Validators.required),
    'numero-mantenedora':new FormControl(null,Validators.required),
    'complemento-mantenedora':new FormControl(null,Validators.prototype),
    'bairro-mantenedora':new FormControl(null,Validators.required),
    'uf-mantenedora':new FormControl(null,Validators.required),
    'municipio-mantenedora':new FormControl(null,Validators.required),
  });


  onSubmit(){
  this.cursoEscolhido = this.userForm.value.curso;
  this.cursoAtual.emit(this.cursoEscolhido);

  this.enable = this.enable == false ? true : false;
  this.buttonClick.emit(this.enable);
 
  }

}
  
  
