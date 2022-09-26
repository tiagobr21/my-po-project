import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissao-xml-doc',
  templateUrl: './emissao-xml-doc.component.html',
  styleUrls: ['./emissao-xml-doc.component.scss']
})
export class EmissaoXmlDocComponent implements OnInit {
   
  conformeFiltro:string= '';
 
 

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

  constructor() { }

  ngOnInit(): void {
    scrollTo(10, 0);
    
    
  }






}
