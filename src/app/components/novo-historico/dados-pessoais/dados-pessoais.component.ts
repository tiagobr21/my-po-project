
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DadosIndividuaisComponent } from '../dados-individuais/dados-individuais.component';
import { empty } from 'rxjs';



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

  @Output() view = new EventEmitter();

  
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
  historicoSelecionado:any[]= [];
  

  constructor(private service:BackconnectService,private fb:FormBuilder,private dialog:MatDialog) {
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

  dadosIndividuais(id:any){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "100%";
    this.dialog.open(DadosIndividuaisComponent,dialogConfig)
    
    for(let i=0;i<this.Diplomados.length;i++){ 
      if(this.Diplomados[i].Dadosdiplomadiplomadoid == id){
    
        this.historicoSelecionado.push(this.Diplomados[i]);
     
        
      }
    }

      
      this.view.emit(this.historicoSelecionado);
      this.historicoSelecionado.shift();
    
   
    
  }


}
 