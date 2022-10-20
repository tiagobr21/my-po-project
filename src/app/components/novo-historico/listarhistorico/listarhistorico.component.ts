import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup, FormControl,Validators, FormControlName } from '@angular/forms';


@Component({
  selector: 'app-listarhistorico',
  templateUrl: './listarhistorico.component.html',
  styleUrls: ['./listarhistorico.component.scss']
})
export class ListarhistoricoComponent implements OnInit {

 

  @Input() showPage:any;

 @Output() back = new EventEmitter();
backPage:boolean = false;
 @Output() cursoAtual = new EventEmitter();
 @Output() buttonClick = new EventEmitter();
 enable:boolean = false;
 @Output() show = new EventEmitter();
  
  loading:boolean =false;
  cursoEscolhido:any
  cursoSelecionado:any
  Historico:any
  dataHabilitacao:any

  ids:any

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
 
  }


 
  cursos(curso:any):any{

       this.cursoEscolhido = curso
     
       
       this.service.listarHistorico().subscribe((res):any=>{
        
           this.Historico = res;

       
   
  
            if(this.Historico.DadosDiplomaDadosCursoNomeCurso == this.cursoEscolhido){
       
              this.cursoSelecionado = this.Historico;

              // 

              function dataFormatada(d:any) {
                let nomeMeses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
                let data = new Date(d);
                let dia = data.getDate();
                let mes = data.getMonth();
                let meses = nomeMeses[mes];
                var ano = data.getFullYear();
                return [dia+'/'+meses+'/'+ano].join(' ');
            }

            
            this.dataHabilitacao = dataFormatada(this.cursoSelecionado.DadosDiplomaDadosCursoDataHabilitacao);

            }
           
      });  
      

    
  }


  userForm = new FormGroup({
    'nome-curso':new FormControl(null,Validators.required),
    'nome-habilitacao':new FormControl(null,Validators.required),
    'emec':new FormControl(null,Validators.required),
    'data-habilitacao':new FormControl(null,Validators.required),
    'nome':new FormControl(null,Validators.required),
    'cpf':new FormControl(null,Validators.required),
    'nascimento':new FormControl(null,Validators.required),
    'nacionalidade':new FormControl(null,Validators.required),
    'sexo':new FormControl(null,Validators.required),
    'uf':new FormControl(null,Validators.required),
    'municipio':new FormControl(null,Validators.required),
    'codigo':new FormControl(null,Validators.required),
    'estrangeiro':new FormControl(null,Validators.required),
    'id':new FormControl(null,Validators.required),
    'rg':new FormControl(null,Validators.required),
    'uf-rg':new FormControl(null,Validators.required),
    'orgao':new FormControl(null,Validators.required)
  });

  refresh(){
    location.reload()
  }

  onSubmit(){
      this.cursoEscolhido = this.userForm.value['nome-curso'];
      this.cursoAtual.emit(this.cursoEscolhido);


      this.enable = this.enable == false ? true : false;
      this.buttonClick.emit(this.enable);

      this.backPage = this.backPage == false ? true : false
      this.back.emit(this.backPage );

      this.show.emit(this.showPage = false);
      

}


}
