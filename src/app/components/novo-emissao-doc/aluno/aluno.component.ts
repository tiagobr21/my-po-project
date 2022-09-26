
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

  infos = [
    {
      VersaoXML:'v1.04.1',
      IdDiploma:'20030103',
      CodigoValidacao:'1283467024671c6c58b8',
      Origem:'Novo',
      Situacao:'EM CONFORMIDADE',
      DataEmissao:'04/08/2022 13:29',
      UltimaAtualizacao:'04/08/2022 14:00',
      Usuario:'Hugo Santos'
    },
    {
       VersaoXML:'v1.04.1',
       IdDiploma:'646442334',
       CodigoValidacao:'34mfenpn3om567k7m3l',
       Origem:'Novo',
       Situacao:'NÃO CONFORMIDADE',
       DataEmissao:'05/08/2022 08:43',
       UltimaAtualizacao:'04/08/2022 11:37',
       Usuario:'Tiago Souza'
      }
  ]
    
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
  checkbox:any[]=[{}]
  

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
        console.log(item.value)
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
    this.enable3 = false;
    this.enable4 = this.enable4 == false ? true : false;
    this.buttonClick4.emit(this.enable4)
    this.alunosSelecionados.emit(this.userForm.value)


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