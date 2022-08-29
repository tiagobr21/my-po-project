import { AfterViewInit, Component, ElementRef, OnInit,ViewChild, ViewChildren } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';






@Component({
  selector: 'app-selecionar-curso',
  templateUrl: './selecionar-curso.component.html',
  styleUrls: ['./selecionar-curso.component.scss']
})
export class SelecionarCursoComponent implements OnInit,AfterViewInit{
  
   /* @ViewChild('viewer') viewerRef!:ElementRef; */
     
   @ViewChildren('gerar') gerars:any;

  dataRequest:any;
  gerar:any;
  checked:boolean = false;
  opacity='0.5';
  opacity2='0.5';
  gerarDiploma:string[] = [''];;
  next:boolean = false;
  pdf:any;
  gerado:boolean =false;
  diplomaXml:any;
  xml:any;
  view:boolean = false
  display:string = 'block';
  displayStatus:boolean = false;
  status_true:string[] = [];
  


 ngAfterViewInit():void{
/*     WebViewer({
     path:'../assets/lib',
     initialDoc:'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf'
    },this.viewerRef.nativeElement).then(instance => {

    }); */

  }

  constructor(private service:BackconnectService) {}

  ngOnInit(): void{

    this.service.dataRequest().subscribe((res)=>{
      this.dataRequest = res; 
   
     
    }); 

    this.service.gerarDiplomado().subscribe((res)=>{
      
      this.gerar = res.data;
      this.pdf =  this.gerar['rvdd'];
      this.diplomaXml = this.gerar['diploma'];
      this.next = true;

    });

   
   
    
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


  
  viewPdf(){
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
  viewXml(){
    let text =  this.diplomaXml;
    let filename;
    this.downloadXml(filename,text);
     
  }

   /*    this.view = !this.view
    this.display = 'block'; */

  fechar(){
    this.display = 'none';
    
  }


 
  check(id:any){
   
   this.checked = !this.checked

   console.log('O id clicado é: '+ id);
     

  
    for(let i=0; i<this.dataRequest.length;i++){

      this.dataRequest[i].DadosDiplomaDiplomadoId;
  
       if(id == this.dataRequest[i].DadosDiplomaDiplomadoId){
        
        this.status_true[i] = id;
     
       console.log(this.status_true);
        
      
  
      }
    }

      console.log('___________________________________________');
  }


  check2(){

    this.opacity2 ='1';

    
  }


}
