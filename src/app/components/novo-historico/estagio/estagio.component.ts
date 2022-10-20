import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackconnectService } from 'src/app/service/backconnect.service';


@Component({
  selector: 'app-estagio',
  templateUrl: './estagio.component.html',
  styleUrls: ['./estagio.component.scss']
})
export class EstagioComponent implements OnInit {

 
  @Input() curso:any;
  @Input() enable2:any;
  @Output() buttonClick3 = new EventEmitter();
  enable3:boolean = false; 

  Estagio:any;
  cursoSelecionado:any
  dataFim:any[]=[];
  dataInicio:any[]=[];
  dataRegistro:any[]=[];


  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
    this.service.listarEstagio().subscribe((res):any=>{
      this.Estagio = res;
      console.log( this.Estagio )
        

       
             function dataFormatada(d:any) {
               let nomeMeses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
               let data = new Date(d);
               let dia = data.getDate();
               let mes = data.getMonth();
               let meses = nomeMeses[mes];
               var ano = data.getFullYear();
               return [dia+'/'+meses+'/'+ano].join(' ');
           }
 
           for(let i=0;i<this.Estagio.length;i++){
             this.dataFim.push(dataFormatada(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDataFim))
             this.dataInicio.push(dataFormatada(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDataInicio))
           }
    });
  }



  userForm = new FormGroup({
    'nome-curso': new FormControl('',Validators.required),
    'codigo-mec': new FormControl('',Validators.required),
    'nome-habilitacao': new FormControl('',Validators.required),
    'titulo-conferido': new FormControl('',Validators.required),
    'grau-conferido': new FormControl('',Validators.required),
    'autorizacao': new FormControl('',Validators.required),
    'modalidade': new FormControl('',Validators.required),
    'reconhecimento': new FormControl('',Validators.required),
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

  refresh(){
    location.reload()
  }
}
