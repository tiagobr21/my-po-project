import { Component, OnInit } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';

@Component({
  selector: 'app-selecionar-curso',
  templateUrl: './selecionar-curso.component.html',
  styleUrls: ['./selecionar-curso.component.scss']
})
export class SelecionarCursoComponent implements OnInit {

  dataRequest:any;
  gerar:any;
  opacity='0.5';
  opacity2='0.5';
  gerarDiploma:boolean =false;
  next:boolean = false;
  pdf:any;
  gerado:boolean =false

  constructor(private service:BackconnectService) { }

  ngOnInit(): void {

    this.service.dataRequest().subscribe((res)=>{
      this.dataRequest = res; 
      this.dataRequest = this.dataRequest['dados_academicos'];
     
    }); 

    this.service.gerarDiplomado().subscribe((res)=>{
      this.gerar = res.data;
      this.pdf =  this.gerar['rvdd'];
      this.next = true;
    });

    
    
    
    scrollTo(10, 0);
  }

  gerarDiplomados(){
  
    this.gerarDiploma = !this.gerarDiploma;
    this.gerado = !this.gerado;

    
  }

  downloadPdf(base64String:any, fileName:any) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }


  viewPdf(){
    let base64String =  this.pdf;
    this.downloadPdf(base64String,"sample");
  }
 
  check(){
    this.opacity = '1'
} 

check2(){

    this.opacity2 ='1';
  }

}
