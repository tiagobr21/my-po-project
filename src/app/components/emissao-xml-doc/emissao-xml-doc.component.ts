import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissao-xml-doc',
  templateUrl: './emissao-xml-doc.component.html',
  styleUrls: ['./emissao-xml-doc.component.scss']
})
export class EmissaoXmlDocComponent implements OnInit {
   
  filtroConforme:string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
