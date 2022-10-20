import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-ativcomplementares',
  templateUrl: './ativcomplementares.component.html',
  styleUrls: ['./ativcomplementares.component.scss']
})
export class AtivcomplementaresComponent implements OnInit {

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
  AtivCom:any;
  cursoSelecionado:any;
  dataFim:any[]=[];
  dataInicio:any[]=[];
  dataRegistro:any[]=[];
  quantidade:number = 0
   
  constructor(private service:BackconnectService) { 
  
  }

  
  ngOnInit(): void {
    this.service.listarAtivCom().subscribe((res):any=>{
      this.AtivCom = res;

        
       this.quantidade = this.AtivCom.length
       
       
             function dataFormatada(d:any) {
               let nomeMeses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
               let data = new Date(d);
               let dia = data.getDate();
               let mes = data.getMonth();
               let meses = nomeMeses[mes];
               var ano = data.getFullYear();
               return [dia+'/'+meses+'/'+ano].join(' ');
           }
 
           for(let i=0;i<this.AtivCom.length;i++){
             this.dataFim.push(dataFormatada(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDataFim))
             this.dataInicio.push(dataFormatada(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDataInicio))
             this.dataRegistro.push(dataFormatada(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDataRegistro))
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
    'descricao':new FormControl(null,Validators.required),
    'cargahoraria':new FormControl(null,Validators.required),
    'datafim':new FormControl(null,Validators.required),
    'datainicio':new FormControl(null,Validators.required),
    'dataregistro':new FormControl(null,Validators.required),
    'docentecpf':new FormControl(null,Validators.prototype),
    'docentelattes':new FormControl(null,Validators.prototype),
    'docentenome':new FormControl(null,Validators.required),
    'docentetitulo':new FormControl(null,Validators.required),
    'tipo':new FormControl(null,Validators.required)

   
  });

  backPages(){
    this.enable = false
    this.show.emit(this.showPage = true);
   
  }

}
