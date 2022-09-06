import { AfterViewInit, Component, ElementRef, OnInit,ViewChild, ViewChildren } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.scss']
})
export class AssinaturaComponent implements OnInit {
    formulario!:FormGroup;
    
  
    dataRequest:any;
    gerar:any;
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
    
    constructor(private service:BackconnectService,private formBuilder:FormBuilder) {
      this.formulario = this.formBuilder.group({
        technology: this.formBuilder.array([], [Validators.required])
      })
    }
  
    controlOnChange(e:any) {
      const technologies: FormArray = this.formulario.get('technology') as FormArray;
    
      if (e.target.checked) {
        technologies.push(new FormControl(e.target.value));
        this.selectedCheckBoxList.push(e.target.value);
       
      } else {
         const index = technologies.controls.findIndex(technology => technology.value === e.target.value);
         technologies.removeAt(index);
      }
    }
  
   
    ngSubmit(){
     this.gerado = true;
  
      this.keys = this.formulario.value['technology'];
      this.keys = Object.keys(this.keys);
     
     console.log(this.keys)
      for(let i=0; i<this.keys.length;i++){
          this.keys[i]
      }
   
      this.margin = '-32px'
        
         
    }
  
    ngOnInit(): void{
  
      this.service.listarDiplomados().subscribe((res)=>{
        this.dataRequest = res; 
       
          
       
      }); 
  
      /* this.service.gerarDiplomado().subscribe((res)=>{
        
        this.gerar = res.data;
        this.pdf =  this.gerar['rvdd'];
        this.diplomaXml = this.gerar['diploma'];
        this.next = true;
  
      }); */
     
      this.keys= false
     
    
  
      scrollTo(10, 0);
    }
    
   
  
  
  
    gerarDiplomados():any{
      if(this.checked == false){
        return 0;
       }else{
        this.gerado = !this.gerado;
  
      
    }
  
    }
  
    downloadPdf(base64String:any, fileName:any) {
      const source = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement("a");
      link.download = `${fileName}.pdf`
      link.href = source;
      link.click();
    }
  
  
    
    viewPdf(id:any){
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
  
  /* viewXmls(){
  
  
  }
   */
  
  
  
    viewXml(id:any){
        
        /*  let text =  this.diplomaXml;
         let filename;
         this.downloadXml(filename,text); */
        
        
  
     
        
    }
  
     /*    this.view = !this.view
      this.display = 'block'; */
  
    fechar(){
      this.display = 'none';
      
    }
  
  
   
    check(){
     
     this.checked = !this.checked
     this.opacity ='1';
       
    }
  
  
    check2(){
  
      this.opacity2 ='1';
  
      
    }
  
  
  }
  
  
    
  /*
   ngAfterViewInit():void{
       WebViewer({
       path:'../assets/lib',
       initialDoc:'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
      },this.viewerRef.nativeElement).then(instance => {
  
      }); 
  
    }*/
  
  
       
    /*   for(let i=0; i<this.dataRequest.length;i++){
  
        this.dataRequest[i].DadosDiplomaDiplomadoId;
    
         if(id == this.dataRequest[i].DadosDiplomaDiplomadoId){
          
          this.status_true[i] = id;
         
          this.key = Object.keys(this.status_true);
    
         this.bool_check = !this.bool_check;
        
          this.key = this.key.pop();
       
      
        
         
          console.log(this.key);
         
  
          this.key = this.key.pop();
           */


