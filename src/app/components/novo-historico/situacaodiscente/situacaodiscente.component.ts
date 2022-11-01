import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-situacaodiscente',
  templateUrl: './situacaodiscente.component.html',
  styleUrls: ['./situacaodiscente.component.scss']
})
export class SituacaodiscenteComponent implements OnInit {
  
  @Input() curso:any;
  @Input() enable4:any;
  @Input() alunos:any;
  @Output() buttonClick5 = new EventEmitter();
  enable5:boolean = false; 
  @Output() alunosAssinatura = new EventEmitter();


  sitacaoDiscente:any;
  cursoSelecionado:any
  dataFim:any[]=[];
  dataInicio:any[]=[];
  dataRegistro:any[]=[];
  peridoletivo:any[]=[];
  situacaodiscente:any[]=[];
  situacaoDatas:any;
  ultimoSituacao:any

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
    this.service.listarSitacaoDiscente().subscribe((res):any=>{
      this.sitacaoDiscente = res;
       console.log(this.sitacaoDiscente)
        
      for (let i=0; i < this.sitacaoDiscente.length; i++) { 
        this.peridoletivo.push(this.sitacaoDiscente[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarSituacaoAtualDiscentePeriodoLetivo)
        this.situacaodiscente.push(this.sitacaoDiscente[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarSituacaoAtualDiscenteSituacaoDiscente)

      }
    });

    this.service.listarSitacaoDiscente().subscribe((res):any=>{
      this.situacaoDatas = res;
      this.ultimoSituacao = this.situacaoDatas[this.situacaoDatas.length - 1];
      
 });

  }



  userForm = new FormGroup({
    'peridoletivo': new FormArray([ 
      new FormControl(this.peridoletivo,Validators.required)
    ]),
    'situacaodiscente': new FormArray([
      new FormControl(this.situacaodiscente,Validators.required)
    ]) 

  });


  ngSubmit(){
  
    this.enable4 = false;
    this.enable5 = this.enable5 == false ? true : false;
    this.buttonClick5.emit(this.enable5);
    this.alunosAssinatura.emit(this.userForm.value)

  }

  refresh(){
    location.reload()
  }

}
