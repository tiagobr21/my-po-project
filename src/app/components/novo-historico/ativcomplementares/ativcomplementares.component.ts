import { Component, Input, OnInit, Output,EventEmitter,ViewChild ,ElementRef} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ativcomplementares',
  templateUrl: './ativcomplementares.component.html',
  styleUrls: ['./ativcomplementares.component.scss']
})
export class AtivcomplementaresComponent implements OnInit {
  
  @ViewChild("descricao") descricao!: ElementRef;
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
  quantidade:number = 0;
  descricoes:any[]=[];
  cargahoraria:any[]=[];
  datafim:any[]=[];
  datainicio:any[]=[];
  dataregistro:any[]=[];
  docentecpf:any[]=[];
  docentelattes:any[]=[];
  docentenome:any[]=[];
  docentetitulo:any[]=[];
  tipo:any[]=[];


  constructor(private service:BackconnectService,private fb:FormBuilder) { 
 
  }


  
  ngOnInit(): void {

    if(this.cursoSelecionado == this.curso){
    this.service.listarAtivCom().subscribe((res):any=>{
  
      this.AtivCom = res;
   

      for (let i=0; i < this.AtivCom.length; i++) { 
        this.descricoes.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDescricao)
        this.cargahoraria.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarCargaHorariaHoraRelogio)
        this.datafim.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarCargaHorariaHoraRelogio)
        this.datainicio.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarCargaHorariaHoraRelogio)
        this.dataregistro.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarCargaHorariaHoraRelogio)
        this.docentecpf.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDocentesResponsaveisPelaValidacao.DocenteCPF)
        this.docentelattes.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDocentesResponsaveisPelaValidacao.DocenteLattes)
        this.docentenome.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDocentesResponsaveisPelaValidacao.DocenteNome)
        this.docentetitulo.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarDocentesResponsaveisPelaValidacao.DocenteTitulacao)
        this.tipo.push(this.AtivCom[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularAtividadeComplementarTipoAtividadeComplementar)

      }
  
        

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
  }



  ngOnChanges() {
  
/*     this.service.listarDataRequestHis().subscribe((res)=>{
       this.cursoSelecionado = res;
       this.cursoSelecionado =  this.cursoSelecionado['dados_historico'][0].DadosDiplomaDadosCursoNomeCurso
    
    })
     */


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
    
    'descricao':new FormArray ([
     new FormControl(this.descricoes,Validators.required)]),

    'cargahoraria':new FormArray([
      new FormControl( this.cargahoraria,Validators.required)]),

    'datafim':new FormArray([
     new FormControl (this.datafim,Validators.required)
    ]),
    'datainicio':new FormArray([
      new FormControl (this.datainicio,Validators.required)
     ]),
    'dataregistro':new FormArray([
      new FormControl (this.dataregistro,Validators.required)
     ]),
    'docentecpf':new FormArray([
      new FormControl (this.docentecpf,Validators.required)
     ]),
    'docentelattes':new FormArray([
      new FormControl (this.docentelattes,Validators.required)
     ]),
    'docentenome':new FormArray([
      new FormControl (this.docentenome,Validators.required)
     ]),
    'docentetitulo':new FormArray([
      new FormControl (this.docentetitulo,Validators.required)
     ]),
    'tipo':new FormArray([
      new FormControl (this.tipo,Validators.required)
     ]),
  });


  backPages(){
    this.enable = false
    this.show.emit(this.showPage = true);
   
  }

}
