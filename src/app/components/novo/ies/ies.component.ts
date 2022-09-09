import { Component, Input, OnInit } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.scss']
})
export class IesComponent implements OnInit {

  @Input() enable:boolean = false;
  @Input() curso:any;
  Diplomados:any;
  cursoSelecionado:any
   
  constructor(private service:BackconnectService) { 
  
  }

  
  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.service.listarDiplomados().subscribe((res):any=>{
     this.Diplomados = res;
     // console.log(this.Diplomados)
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
           this.cursoSelecionado = this.Diplomados[i];
         } else{
           return 0
         }
       }
   });  
  }

  onSubmit(){

  }

  userForm = new FormGroup({
    'nome-instituicao':new FormControl(null,Validators.required),
    'codigoMec':new FormControl(null,Validators.required),
    'razao':new FormControl(null,Validators.required),
    'cnpj':new FormControl(null,Validators.required),
    'cep-ies':new FormControl(null,Validators.required),
    'logradouro-ies':new FormControl(null,Validators.required),
    'numero-ies':new FormControl(null,Validators.required),
    'complemento-ies':new FormControl(null,Validators.prototype),
    'bairro':new FormControl(null,Validators.required),
    'uf':new FormControl(null,Validators.required),
    'municipio':new FormControl(null,Validators.required),
  });

  


}
