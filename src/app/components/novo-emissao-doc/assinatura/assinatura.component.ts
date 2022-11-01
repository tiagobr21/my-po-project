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
    @Input() periodo:any;
  
    userForm:FormGroup;

    status_1:string = 'PENDENTE';
    status_2:string = 'VALIDADO';
    checks:any
    alunosSelecionado:any[]=[];
    cursoSelecionado:any;
    Diplomado:any;
    gerar:boolean = false;
    checked:boolean = false;
    opacity='0.5';
    opacity2='0.5';
    gerarDiploma:boolean = false;
    gerarDiplomado:any;
    gerarDiplomados2:any[]=[];
    gerarDiplomados:any
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
    rvdd:any[]=[];
    Ras:any[]=[];
    Nomes:any[]=[];
    ids:any[]=[];
    loading1:boolean = false;
    loading2:boolean = false;
    loading3:boolean = false;
    loading4:boolean = false;
    preLoading:boolean = false
    base64String:any[]=[];
    visualizarpdf:boolean = false;
    visualizarxml:boolean = false;
  

    constructor(private service:BackconnectService,private fb:FormBuilder) {
      this.userForm = this.fb.group({
        status_1: ["PENDENTE",[Validators.required]],
        checkArray: this.fb.array([],[Validators.required]),
        status_2: ["VALIDADO",[Validators.required]],
      })
    }


    onCheckboxChange(e:any){
      this.preLoading = true;
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

      this.ids = checkArray.value
     
        console.log(this.ids)
        this.service.gerarDiplomados().subscribe((res)=>{ 
          this.gerarDiplomados = res;
          this.loading1 =  true;
       
         })
        
       return i;
    }


   if(id == -1){
      i.Checked = this.allCheckes;
      console.log(i.Checked)
      checkArray.push(new FormControl(i.DadosDiplomaDiplomadoId));
      console.log(checkArray.value);

      this.ids = checkArray.value;
      console.log(this.ids);

      this.service.gerarDiplomados().subscribe((res)=>{ 
        this.gerarDiplomados = res;
        this.loading1 =  true;
     
       })
      this.checks = true;
    
      return i;
    }

    return i;
  });
   
  }

    
  ngOnChanges() {
      console.log(this.ids);
      this.service.gerarDiplomados().subscribe((res):any=>{
        
        this.Diplomado = res;
        
        this. alunos_assinar =  this.alunos_assinar['checkArray'];
 
        this.alunos_assinar.forEach((element:any) => {
     
          for(let i=0;i<this.Diplomado.length;i++){ 
              
            if(this.Diplomado[i].DadosDiplomaDiplomadoId == element ){
            
            this.cursoSelecionado = this.Diplomado[i];
            
            this.alunosSelecionado.push(this.Diplomado[i]);
              
             
          this.alunosSelecionado.map( (diplomado:any) => {
            diplomado.Checked = false;

          })
           
             }
          } 
        
        }); 
       });

 
  
 
        //  error=>{console.log(error)} - mensagem de erro  
    

    }
   
    ngSubmit(){
      this.gerado = true;
      console.log(this.userForm.value)
      this.opacity2 ='1';
      
      for(let y=0;y<this.ids.length;y++){
        for(let i=0;i<this.gerarDiplomados.length;i++){
           if(this.gerarDiplomados[i].DadosDiplomaDiplomadoId == this.ids[y]){
             this.Ras.push(this.gerarDiplomados[i].Ra);
             this.Nomes.push(this.gerarDiplomados[i].DadosDiplomaDiplomadoNome);
             console.log(this.Ras);
             console.log(this.Nomes)
             
          
           }
        }
       }

       this.loading2= true;
       
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

  
  
    viewPdf(ra:any){

      this.visualizarpdf = true;
      this.loading3 = false;
      console.log(ra);

      for(let y=0;y<this.Ras.length;y++){
      
      if(ra == this.Ras[y]){

        this.service.gerarDiploma(ra).subscribe((res)=>{ 

          this.gerarDiplomado = res;
          console.log(this.gerarDiplomado)
          this.rvdd = this.gerarDiplomado['data'].rvdd;
        
        
          console.log(this.rvdd);
            
          if(this.gerado == true){

              this.base64String =this.rvdd
              this.downloadPdf(this.base64String,this.Nomes[y]);
              this.loading3 = true;
   
          }
        
        })  
         

      
      }
  
      }
    
    }
    
    downloadXml(filename:any, text:any) {
      const element = document.createElement('a');
      element.setAttribute('href','data:application/xml;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      document.body.removeChild(element);
      element.click();

    }
  
    viewXml(ra:any):any{


      this.visualizarxml = true;
      this.loading4 = false;
      console.log(ra);

      for(let y=0;y<this.Ras.length;y++){
      
      if(ra == this.Ras[y]){

        this.service.gerarDiploma(ra).subscribe((res)=>{ 

          this.gerarDiplomado = res;
          console.log(this.gerarDiplomado)
          this.diplomaXml = this.gerarDiplomado['data'].documentacao;
        
          console.log(this.rvdd);
            
          if(this.gerado == true){
              let text =  this.diplomaXml;
              let filename = this.Nomes[y];
              this.downloadXml(filename,text); 
              this.loading4 = true;
            }
        
        })  
         

      
      }
  
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
  
  