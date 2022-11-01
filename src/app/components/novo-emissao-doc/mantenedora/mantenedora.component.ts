import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators, FormControlName } from '@angular/forms';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MsgerrorComponent } from '../../errorsmensage/msgerror/msgerror.component';


@Component({
  selector: 'app-mantenedora',
  templateUrl: './mantenedora.component.html',
  styleUrls: ['./mantenedora.component.scss']
})
export class MantenedoraComponent implements OnInit {

 @Input() showPage:any;

 @Output() back = new EventEmitter();
backPage:boolean = false;
 @Output() cursoAtual = new EventEmitter();
 @Output() periodoAtual = new EventEmitter();
 @Output() buttonClick = new EventEmitter();
 enable:boolean = false;
 @Output() show = new EventEmitter();
  
  loading:boolean =false;
  cursoEscolhido:any
  cursoSelecionado:any[]=[];
  periodoEscolhido:any;
  Diplomado:any
  submitRequere:boolean = true
  ids:any

  constructor(private service:BackconnectService, private dialog: MatDialog) { }

  ngOnInit(): void {

     
  }

  periodos(periodo:any){
   this.periodoEscolhido = periodo;

    console.log(this.periodoEscolhido)
  }


 
  cursos(curso:any):any{
       this.cursoEscolhido = curso
       console.log()
       this.service.listarDiplomados().subscribe((res):any=>{
      
        this.Diplomado = res;
        

          for(let i=0;i<this.Diplomado.length;i++){ 
        
            if(this.Diplomado[i].DadosDiplomaDadosCursoNomeCurso == this.cursoEscolhido &&
              this.Diplomado[i].RegistroReqDadosPrivadosDiplomadoHistoricoEscolarSituacaoAtualDiscentePeriodoLetivo == this.periodoEscolhido ){
          
              this.cursoSelecionado.push(this.Diplomado[i]);
              console.log(this.cursoSelecionado)
            }/* else{
              this.submitRequere = false;
              const dialogConfig = this.dialog.open(MsgerrorComponent,{
                width:'100%'
              })
              setTimeout(()=>{
                window.location.reload();
             }, 5000);
            } */
          }
      });  
 

    
  }


  userForm = new FormGroup({
    'curso':new FormControl(null,Validators.required),
    'periodo':new FormControl(null,Validators.required),
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

  refresh(){
    location.reload()
  }

  onSubmit(){
      this.cursoEscolhido = this.userForm.value.curso;
      this.cursoAtual.emit(this.cursoEscolhido);
      
      this.periodoEscolhido = this.userForm.value.periodo;
      this.periodoAtual.emit(this.periodoEscolhido);
      

      this.enable = this.enable == false ? true : false;
      this.buttonClick.emit(this.enable);

      this.backPage = this.backPage == false ? true : false
      this.back.emit(this.backPage );
      
      // showPage vem primeiro  undefined e depois true 

      this.show.emit(this.showPage = false);
      

}



}
  
  
