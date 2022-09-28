
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
 
  userForm:FormGroup;
  alunosFiltro:string = '';
    
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
  checkbox:any[]=[]
  allCheckes:any

  

  constructor(private service:BackconnectService,private fb:FormBuilder) {
     this.userForm = this.fb.group({
       checkArray: this.fb.array([],[Validators.required]),
   
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

        checkArray.push(new FormControl(i.Dadosdiplomadiplomadoid));
        return i;
    
      }else if(id == -1){
        i.Checked = this.allCheckes;
        checkArray.push(new FormControl(i.Dadosdiplomadiplomadoid));
       
        if(e.target.checked){
          this.checks = true;
        }else{
          this.checks = false;
          
          let contador = 0; 

          checkArray.controls.forEach((item:any)=>{
        
              checkArray.removeAt(contador);
              contador++;
              console.log(checkArray.value)
              return;

          });
        } 

        return i;

      } else{
        let contador = 0; 

        checkArray.controls.forEach((item:any)=>{
        
          if (item.value == e.target.value){
            console.log(item.value)
            checkArray.removeAt(contador);
            return;
          }


          contador++;
        });
      }
    
      return i;
    });
    
  }


  ngSubmit(){
    this.enable3 = false;
    this.enable4 = this.enable4 == false ? true : false;
    this.buttonClick4.emit(this.enable4)
    this.alunosSelecionados.emit(this.userForm.value)
    console.log(this.userForm.value)

  }

  ngOnInit(): void {
        scrollTo(10, 0);
    
  }

  
  ngOnChanges() {

  
    this.service.listarDiplomados().subscribe((res):any=>{
      this.Diplomados = res;

      this.Diplomados.map( (diplomado:any) => {
        diplomado.Checked = false;
      }) 
    
       for(let i=0;i<this.Diplomados.length;i++){ 
         if(this.Diplomados[i].Dadosdiplomadadoscursonomecurso == this.curso){
   
           this.cursoSelecionado = this.Diplomados[i];
           
           this.dadosAlunos.push(this.Diplomados[i]);
          
           
           // Exibição da Página

           this.keys = Object.keys(this.dadosAlunos)
           this.contador = this.keys.length/2
           
           if(this.contador > 20){
           this.page1 = this.dadosAlunos.slice(0,this.contador/4);
           this.page2 = this.dadosAlunos.slice(this.contador/4,this.contador/2);
           this.page3 = this.dadosAlunos.slice(this.contador/2,this.contador);
           }else{
            this.page1 = this.dadosAlunos.slice(0,this.contador);
       
           }
       
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

  refresh(){
    location.reload();
  }
}