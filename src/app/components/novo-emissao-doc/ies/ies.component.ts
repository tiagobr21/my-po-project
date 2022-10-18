import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.scss']
})
export class IesComponent implements OnInit {

  @Input() enable:any;
  @Input() curso:any;
  @Input() backPage:any;
  @Input() showPage2:any


  @Output() show = new EventEmitter();
  showPage:boolean = true;

  @Output() buttonClick2 = new EventEmitter();
  enable2:boolean= false;

  @Output() back = new EventEmitter();
  
  loading:boolean = false
  Diplomados:any;
  cursoSelecionado:any
   
  constructor(private service:BackconnectService) { 
  
  }

  
  ngOnInit(): void {
    
  }

  ngOnChanges() {

    this.service.listarDiplomados().subscribe((res):any=>{
     this.Diplomados = res;
   
  
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].DadosDiplomaDadosCursoNomeCurso == this.curso){
    
            this.cursoSelecionado = this.Diplomados[i];
            
         } 
       }
   });

    
  }

  
  refresh(){
    location.reload()
  }

  onSubmit(){ 
    this.enable = false

    this.enable2 = this.enable2 == false ? true : false;
    this.buttonClick2.emit(this.enable2);


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
    'bairro-ies':new FormControl(null,Validators.required),
    'estado-ies':new FormControl(null,Validators.required),
    'cidade-ies':new FormControl(null,Validators.required), 
    'cred-tipo':new FormControl(null,Validators.required),
    'cred-numero':new FormControl(null,Validators.required),
    'cred-data':new FormControl(null,Validators.required),
    'cred-data-publicacao':new FormControl(null,Validators.required),
    'cred-secao':new FormControl(null,Validators.required),
    'cred-pagina':new FormControl(null,Validators.required),
    'tipo-re':new FormControl(null,Validators.required),
    'recred-numero':new FormControl(null,Validators.required),
    'recred-data':new FormControl(null,Validators.required),
    'recred-data-publicacao':new FormControl(null,Validators.required),
    'recred-secao':new FormControl(null,Validators.required),
    'recred-pagina':new FormControl(null,Validators.required)

   
  });

  backPages(){
    this.enable = false
    this.show.emit(this.showPage = true);
   
  }

  


}
