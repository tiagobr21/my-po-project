import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-historicoacademico',
  templateUrl: './historicoacademico.component.html',
  styleUrls: ['./historicoacademico.component.scss']
})
export class HistoricoacademicoComponent implements OnInit {
 
  @Input() enable5:any;
  @Input() alunos_assinar:any;
  @Input() curso:any;

  historicoAcademico:any;
  cursoSelecionado:any
  dataFim:any[]=[];
  dataInicio:any[]=[];
  dataRegistro:any[]=[];

  disciplina:any[]=[];
  cargahoraria:any[]=[];
  nota:any[]=[];
  periodo:any[]=[];
  nomedocente:any[]=[];
  titulacaodocente:any[]=[];
  lattes:any[]=[];
  cpfdocente:any[]=[];
  situacao:any[]=[];

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
    this.service.listarHistoricoAcademico().subscribe((res):any=>{
      this.historicoAcademico = res;
      console.log(this.historicoAcademico);

        for (let i=0; i < this.historicoAcademico.length; i++) { 
          this.disciplina.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDisciplina)
          this.cargahoraria.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaCargaHorariaHoraAula)
          this.nota.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaNota)
          this.periodo.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaPeriodo)
          this.nomedocente.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocentes.DocenteNome)
          this.titulacaodocente.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocentes.DocenteTitulacao)
          this.lattes.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocentes.DocenteLattes)
          this.cpfdocente.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocentes.DocenteCPF)
          this.situacao.push(this.historicoAcademico[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaSituacaoDisciplina)
       
        }
    });
  }



  userForm = new FormGroup({
    'disciplina': new FormArray([
      new FormControl(this.disciplina,Validators.required)
    ]),
    'cargahoraria': new FormArray([
      new FormControl(this.cargahoraria,Validators.required)
    ]),
    'nota': new FormArray([
      new FormControl(this.nota,Validators.required)
    ]),
    'periodo': new FormArray([
      new FormControl(this.periodo,Validators.required)
    ]),
    'nomedocente': new FormArray([
      new FormControl(this.nomedocente,Validators.required)
    ]),
    'titulacaodocente': new FormArray([
      new FormControl(this.titulacaodocente,Validators.required)
    ]),
    'lattes': new FormArray([
      new FormControl(this.lattes,Validators.required)
    ]),
    'cpfdocente': new FormArray([
      new FormControl(this.cpfdocente,Validators.required)
    ]),
    'situacao': new FormArray([
      new FormControl(this.situacao,Validators.required)
    ]),
  

  });
  
  ngSubmit(){
  
  }

  refresh(){
    location.reload()
  }

}
