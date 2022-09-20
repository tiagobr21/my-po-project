import { AfterViewInit, Component, ElementRef, Input, OnInit,ViewChild, ViewChildren } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.scss']
})
export class AssinaturaComponent implements OnInit {
    
    @Input() enable5:any;
    @Input() alunos_assinar:any;
    @Input() curso:any;
  
    userForm:FormGroup;
    
    checks:any
    alunosSelecionado:any[]=[];
    cursoSelecionado:any;
    Diplomados:any;
    gerar:boolean = false;
    checked:boolean = false;
    opacity='0.5';
    opacity2='0.5';
    gerarDiploma:boolean = false;
    next:boolean = false;
    pdf:any;
    gerado:boolean =false;
    diplomaXml:any;
    xml:any;
    view:boolean = false
    display:string = 'block';
    displayStatus:boolean = false;
    keys:any
    selectedCheckBoxList:string[]= [];
    margin:string ='0'
    
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
   
  
    ngOnChanges() {
     
   
      this.service.listarDiplomados().subscribe((res):any=>{
        this.Diplomados = res;
        this. alunos_assinar =  this. alunos_assinar['checkArray'];
 
        this. alunos_assinar.forEach((element:any) => {
     
          for(let i=0;i<this.Diplomados.length;i++){ 
              
            if(this.Diplomados[i].Dadosdiplomadiplomadoid == element){
            
            this.cursoSelecionado = this.Diplomados[i];
            
            this.alunosSelecionado.push(this.Diplomados[i]);
           
           
             }
          } 
          console.log(this.alunosSelecionado)
      
        }); 
       });
    

    }
   
    ngSubmit(){
     
       this.userForm.value 
     
       this.opacity2 ='1';
       
    }
  
    ngOnInit(): void{
     
    }
    
  
    downloadPdf(base64String:any, fileName:any) {
      const source = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement("a");
      link.download = `${fileName}.pdf`
      link.href = source;
      link.click();
    }
  
    viewPdf(id:any):any{
      
      let base64String =  this.pdf;
      this.downloadPdf(base64String,"sample"); 
      
    }
    
    downloadXml(filename:any, text:any) {
      const element = document.createElement('a');
      element.setAttribute('href', ' data:application/xml;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      document.body.removeChild(element);
      element.click();

    }
  
    viewXml(id:any){
      
      let text =  this.diplomaXml;
      let filename;
      this.downloadXml(filename,text); 
    }
  
    fechar(){
      this.display = 'none';
    }
    
    check(){
    /*  this.checked = !this.checked
     this.opacity ='1'; */
    }

    check2(){
      /* this.opacity2 ='1';  */   
    }
  
  
  }
  
  