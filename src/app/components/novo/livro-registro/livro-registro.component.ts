import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-registro',
  templateUrl: './livro-registro.component.html',
  styleUrls: ['./livro-registro.component.scss']
})
export class LivroRegistroComponent implements OnInit {
    
  userForm:FormGroup
    
  @Input() curso:any;
  @Input() enable4:any;
  @Input() alunos:any;
  @Output() buttonClick5 = new EventEmitter();
  enable5:boolean = false; 
  @Output() alunosAssinatura = new EventEmitter();

  Diplomados:any
  alunosSelecionado:any[]=[];
  cursoSelecionado:any
  checks:any


  constructor(private service:BackconnectService,private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      checkArray: this.fb.array([],[Validators.required]),
  
    })
  }

  onCheckboxChange(e:any){
    const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;
  
      if(e.target.checked){
        checkArray.push(new FormControl(e.target.value))
      }else{
        var i=0; 
  
        checkArray.controls.forEach((item:any)=>{
          if (item.value == e.target.value){
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
  
    bulk(e:any){
  
      if(e.target.checked){
        this.checks = true;
      }else{
        this.checks = false;
      }
    }

  ngOnInit(): void {
    scrollTo(10, 0);
  }
  

  ngOnChanges() {

 

    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;
      this.alunos =  this.alunos['checkArray'];
      this.alunos.forEach((element:any) => {
   
        for(let i=0;i<this.Diplomados.length;i++){ 
            
          if(this.Diplomados[i].Dadosdiplomadiplomadoid == element){
          
          this.cursoSelecionado = this.Diplomados[i];
          
          this.alunosSelecionado.push(this.Diplomados[i]);
         
         
           }
        } 
    
      }); 
     });
  
  }

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
