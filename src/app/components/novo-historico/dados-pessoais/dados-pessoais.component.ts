
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  
  userForm:FormGroup;
  dadosFiltro:string = '';
  next:boolean = false;
    
  @Input() curso:any;
  @Input() enable3:any;
  @Output() buttonClick4 = new EventEmitter();
  enable4:boolean = false; 
  @Output() alunosSelecionados = new EventEmitter();
  
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
  Allcheckbox:any[]=[]
  

  constructor(private service:BackconnectService,private fb:FormBuilder) {
     this.userForm = this.fb.group({
       checkArray: this.fb.array([],[Validators.required]),
   
     })
  }

  onCheckboxChange(e:any){
  const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;


    if(e.target.checked){

      console.log(e.target.value)
   
      checkArray.push(new FormControl(e.target.value))




    }  else{

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
  
  ngSubmit(){


  }

  ngOnInit(): void {
    
    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;
      this.next = true;
 
    })
        scrollTo(10, 0);
    
  }

  
  ngOnChanges() {
   
  }
}
