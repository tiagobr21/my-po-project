
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';
import { retry } from 'rxjs';


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
  
  checks:boolean = false;
  Diplomados:any;
  cursoSelecionado:any;
  dadosAlunos:any[]=[];
  teste:any;
  page1:any[]=[];
  page2:any[]=[];
  page3:any[]=[];
  page4:any[]=[];
  page5:any[]=[];
  contador:any;
  keys:any;
  page1Select:boolean=true;
  page2Select:boolean=false;
  page3Select:boolean=false;
  page4Select:boolean=false;
  page5Select:boolean=false;
  checkbox:any[]=[];
  allCheckes:boolean = true;
  

  constructor(private service:BackconnectService,private fb:FormBuilder) {
     this.userForm = this.fb.group({
       checkArray: this.fb.array([],[Validators.required])
   
     })
  }

  onCheckboxChange(e:any){
    const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;
    const id = e.target.value;
    const isChecked = e.target.checked;


   this.Diplomados =  this.Diplomados.map((i:any)=>{
      if(i.Dadosdiplomadiplomadoid === id){
        i.Checked = isChecked
        this.allCheckes = false;
        checkArray.push(new FormControl(i.Dadosdiplomadiplomadoid)) 
      
      }
      if(id == -1){
        i.Checked = this.allCheckes;
        checkArray.push(new FormControl(i.Dadosdiplomadiplomadoid)) 
        return i;
      }
     
      return i;
    });
     console.log(this.Diplomados);
  }



  
  
  ngSubmit(){
  
 console.log(this.userForm.value);


  }

  ngOnInit(): void {
    
    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;
      
       this.Diplomados.map( (diplomado:any) => {
        diplomado.Checked = false;
      }) 
      this.next = true;

      
    })
        scrollTo(10, 0);

  }

  
  ngOnChanges() {
   
  }
}
 /*  
onCheckboxChange(e:any){
  const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;

    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value))

    }else{
      var i=0; 

      checkArray.controls.forEach((item:any)=>{
      
        if (item.value == e.target.value){
          console.log(item.value)
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
   }
   console.log(checkArray.value)
  }

  bulk(e:any){
    this.checks = true;
    const allCheckArray: FormArray = this.userForm.get('checkArray') as FormArray;
    
    if(e.target.checked){
      
      allCheckArray.push(new FormControl(e.target.value))

      allCheckArray.controls.forEach((item:any,i:any)=>{
    
          console.log(item.value)
          return item.value


      });
    }else{
      this.checks = false;
      var i=0; 
      
      allCheckArray.controls.forEach((item:any)=>{
      
        if (item.value == e.target.value){
          console.log(item.value)
    
          allCheckArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    

  }*/