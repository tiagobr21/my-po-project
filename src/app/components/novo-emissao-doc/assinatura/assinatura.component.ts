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

    status_1:string = 'PENDENTE';
    status_2:string = 'VALIDADO';
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
    test:any;
    response:string ='';
    allCheckes:any
    value:any
    
    constructor(private service:BackconnectService,private fb:FormBuilder) {
      this.userForm = this.fb.group({
        status_1: ["PENDENTE",[Validators.required]],
        checkArray: this.fb.array([],[Validators.required]),
        status_2: ["VALIDADO",[Validators.required]],
      })
    }


    onCheckboxChange(e:any){
      const checkArray: FormArray = this.userForm.get('checkArray') as FormArray;
      this.value = e.target.value;
      const id = e.target.value;
      const isChecked = e.target.checked;
      this.checked = e.target.checked;
  
  

   this.alunosSelecionado =  this.alunosSelecionado.map((i:any)=>{

    if(i.DadosDiplomaDiplomadoId === id){
    
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
        console.log(checkArray.value);
       return i;
    }


   if(id == -1){
      i.Checked = this.allCheckes;
      console.log(i.Checked)
      checkArray.push(new FormControl(i.DadosDiplomaDiplomadoId));
      console.log(checkArray.value)
      this.checks = true;
    
      return i;
    }


    return i;
  });
   
  }
    
  ngOnChanges() {
     
   
      this.service.listarDiplomados().subscribe((res):any=>{
        this.Diplomados = res;
        this. alunos_assinar =  this.alunos_assinar['checkArray'];
 
        this. alunos_assinar.forEach((element:any) => {
     
          for(let i=0;i<this.Diplomados.length;i++){ 
              
            if(this.Diplomados[i].DadosDiplomaDiplomadoId == element){
            
            this.cursoSelecionado = this.Diplomados[i];
            
            this.alunosSelecionado.push(this.Diplomados[i]);
              
             
          this.alunosSelecionado.map( (diplomado:any) => {
            diplomado.Checked = false;

          }) 

   
           
             }
          } 
        
        }); 
       });
    

    }
   
    ngSubmit(){
      this.gerado = true;
      console.log(this.userForm.value)
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
      console.log(id)
      if(this.gerado == true){
        let base64String = this.pdf;
        this.downloadPdf(base64String,"sample");
      }else{
        return 0;
      }
       
      
    }
    
    downloadXml(filename:any, text:any) {
      const element = document.createElement('a');
      element.setAttribute('href', ' data:application/xml;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      document.body.removeChild(element);
      element.click();

    }
  
    viewXml(id:any):any{
      if(this.gerado == true){
      let text =  this.diplomaXml;
      let filename;
      this.downloadXml(filename,text); 
      }else{
        return 0;
      }
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
  
  