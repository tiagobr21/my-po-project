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
  @Input() periodo:any;
  @Input() enable4:any;
  @Input() alunos:any;
  @Output() buttonClick5 = new EventEmitter();
  enable5:boolean = false; 
  @Output() alunosAssinatura = new EventEmitter();

  Diplomado:any;
  alunosSelecionado:any[]=[];
  cursoSelecionado:any;
  allCheckes:any;
  checks:boolean = false;
  dadosAlunos:any[]=[];
  teste:any;
  page1:any[]=[]
  page2:any[]=[]
  page3:any[]=[]
  page4:any[]=[]
  page5:any[]=[]
  contador:any
  keys:any;
  page1Select:boolean=true;
  page2Select:boolean=false;
  page3Select:boolean=false;
  page4Select:boolean=false;
  page5Select:boolean=false;

  constructor(private service:BackconnectService,private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      checkArray: this.fb.array([],[Validators.required]),
  
    })
  }

  onCheckboxChange(e:any){
    const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;
    const id = e.target.value;
    const isChecked = e.target.checked;
    // console.log(id);
    // console.log(isChecked);

   this.alunosSelecionado =  this.alunosSelecionado.map((i:any)=>{

    if(i.DadosDiplomaDiplomadoId === id){
      // console.log(i.DadosDiplomaDiplomadoId);
      if(i.Checked == false){
        i.Checked = isChecked
        this.allCheckes = false;
        checkArray.push(new FormControl(i.DadosDiplomaDiplomadoId)) 
      }else{
        let contador = 0; 

        checkArray.controls.forEach((item:any)=>{
        
          if (item.value == e.target.value){
            checkArray.removeAt(contador);
            return;
          }

          contador++;
        });
      }


      // console.log(checkArray.value)
       return i;
    }


   if(id == -1){
      i.Checked = this.allCheckes;
      checkArray.push(new FormControl(i.DadosDiplomaDiplomadoId)) ;
      this.checks = true;
      return i;
    }

    return i;
  });
   
    }


  ngOnInit(): void {
    scrollTo(10, 0);
  }
  

  ngOnChanges() {

 

    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomado = res;
   
     

      this.alunos =  this.alunos['checkArray'];

     

      this.alunos.forEach((element:any) => {
   
        for(let i=0;i<this.Diplomado.length;i++){ 
            
          if(this.Diplomado[i].DadosDiplomaDiplomadoId == element){
          
          this.cursoSelecionado = this.Diplomado[i];
          
          this.alunosSelecionado.push(this.Diplomado[i]);
         console.log( this.alunosSelecionado)
         
          this.alunosSelecionado.map( (diplomado:any) => {
            diplomado.Checked = false;

          
          }) 
         
        
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
    // console.log(this.userForm.value);

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
  
  refresh(){
    location.reload()
  }


}
