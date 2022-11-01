import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
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
  descricao:any[]=[];
  cargahoraria:any[]=[];
  datafim:any[]=[];
  datainicio:any[]=[];
  nomedocente:any[]=[];
  titulacao:any[]=[];
  lattes:any[]=[];
  cpfdocente:any[]=[];
  nomefantasia:any[]=[];
  cnpj:any[]=[];
  razaosocial:any[]=[];

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
    this.service.listarEstagio().subscribe((res):any=>{
      this.Estagio = res;
       
     
        
      for (let i=0; i < this.Estagio.length; i++) { 
        this.descricao.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDescricao)
        this.cargahoraria.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioCargaHorariaHoraRelogio)
        this.datafim.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDataFim)
        this.datainicio.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDataInicio)
        this.nomedocente.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDocentesOrientadores.DocenteNome)
        this.titulacao.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDocentesOrientadores.DocenteTitulacao)
        this.lattes.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDocentesOrientadores.DocenteLattes)
        this.cpfdocente.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioDocentesOrientadores.DocenteCPF)
        this.nomefantasia.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioConcedenteEstagioNomeFantasia)
        this.cnpj.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioConcedenteEstagioCNPJ)
        this.razaosocial.push(this.Estagio[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularEstagioConcedenteEstagioRazaoSocial)
        
      }
       
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
    descricao: new FormArray([
      new FormControl(this.descricao,Validators.required)
    ]),
    cargahoraria: new FormArray([
      new FormControl(this.cargahoraria,Validators.required)
    ]),
    datafim: new FormArray([
      new FormControl(this.datafim,Validators.required)
    ]),
    datainicio: new FormArray([
      new FormControl(this.datainicio,Validators.required)
    ]),
    nomedocente: new FormArray([
      new FormControl(this.nomedocente,Validators.required)
    ]),
    titulacao: new FormArray([
      new FormControl(this.titulacao,Validators.required)
    ]),
    lattes: new FormArray([
      new FormControl(this.lattes,Validators.required)
    ]),
    cpfdocente: new FormArray([
      new FormControl(this.cpfdocente,Validators.required)
    ]),
    nomefantasia: new FormArray([
      new FormControl(this.nomefantasia,Validators.required)
    ]),
    cnpj: new FormArray([
      new FormControl(this.cnpj,Validators.required)
    ]),
    razaosocial: new FormArray([
      new FormControl(this.razaosocial,Validators.required)
    ]),
    
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
