
import { Component, OnInit,Input } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
 
  userForm:FormGroup
    
  @Input() curso:any;
  @Input() enable3:any;
  
  checks:boolean = false
  Diplomados:any;
  cursoSelecionado:any;
  dadosAlunos:any[]=[];
  teste:any;
  page1:any[]=[]
  page2:any[]=[]
  page3:any[]=[]
  page4:any[]=[]
  page5:any[]=[]
  contador:any
  keys:any
  page1Select:boolean=true
  page2Select:boolean=false
  page3Select:boolean=false
  page4Select:boolean=false
  page5Select:boolean=false
  

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
      this.checks = false;
    }else{
      this.checks = false;
    }
  }
  
  submitForm(){
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
        scrollTo(10, 0);
    
  }

  
  ngOnChanges() {

  
    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;
 
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
   
           this.cursoSelecionado = this.Diplomados[i];
           
           this.dadosAlunos.push(this.Diplomados[i]);
           
           // Exibição da Página

           this.page1 = this.dadosAlunos.slice(0,40);
            this.keys = Object.keys(this.page1);
           this.contador = this.keys.length/2;

           this.page2 = this.dadosAlunos.slice(40,80);
           this.keys = Object.keys(this.page2);
           this.contador = this.keys.length/2;

           this.page3 = this.dadosAlunos.slice(80,120);
           this.keys = Object.keys(this.page3);
           this.contador = this.keys.length/2;

           this.page4 = this.dadosAlunos.slice(120,140);
           this.keys = Object.keys(this.page4);
           this.contador = this.keys.length/2;

           this.page5 = this.dadosAlunos.slice(140,180);
           this.keys = Object.keys(this.page5);
           this.contador = this.keys.length/2;
        }
        
      } 
       
     });
  }
  
  page1Ativo(){
    this.page1Select = true
    this.page2Select = false
    this.page3Select = false
    this.page4Select = false
    this.page5Select = false
  }
  page2Ativo(){
    this.page1Select = false
    this.page2Select = true
    this.page3Select = false
    this.page4Select = false
    this.page5Select = false
  }
  page3Ativo(){
    this.page1Select = false
    this.page2Select = false
    this.page3Select = true
    this.page4Select = false
    this.page5Select = false
  }
  page4Ativo(){
    this.page1Select = false
    this.page2Select = false
    this.page3Select = false
    this.page4Select = true
    this.page5Select = false
  }
  page5Ativo(){
    this.page1Select = false
    this.page2Select = false
    this.page3Select = false
    this.page4Select = false
    this.page5Select = true
  }

}