import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoMenuItemBadge } from '@po-ui/ng-components';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  readonly menus: Array<PoMenuItem> = [
    
    {label: 'Dashboard', link:'/dashboard', icon: 'po-icon po-icon-device-desktop', shortLabel: 'Dashboard'},
    {label: 'Administrativo', icon:'po-icon po-icon-waiter', shortLabel: 'início' ,subItems:[ { label: 'Usuários', link:'/cadastro', icon:'po-icon-users', shortLabel: 'Usuários'  },{ label: 'Token', link:'token', icon:'po-icon po-icon-credit-payment', shortLabel: 'Usuários'  } ]},


    
   
    
    { label: 'Área de Diplomação', icon:'fas fa-user-graduate', shortLabel: 'Ferramentas', subItems:[{link:'/emissao-xml-doc',label:'Emissão XML doc'},{link:'/emissao-xml-dip',label:'Emissão XML dip'},{link:'/emissao-rvdd',label:'Emissão RVDD (pdf)'},{link:'/historico',label:'Histórico Escolar'},{link:'/assinaturas',label:'Assinaturas'},{link:'/area-publica',label:'Area Pública'}] },
    // { label: 'Cadastro', icon:'po-icon po-icon-folder', link:'cadastro', shortLabel: 'Diplomados' }, 
    // { label: 'Assinar Diplomados', icon:'po-icon po-icon-edit', shortLabel: 'Assinaturas' }, 
    
  ];


  ngOnInit(): void {

    
  }

}
