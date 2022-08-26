import { RouterModule } from '@angular/router';
import { Component,OnInit ,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { PoMenuItem } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { style } from '@angular/animations';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  

  
 /*  readonly menus: Array<PoMenuItem> = [
    
    {label: 'Dashboard', action: this.onClick.bind(this), icon: 'fas fa-table', shortLabel: 'Dashboard'},
    {label: 'Admnistrativo', action: this.onClick.bind(this), icon:'far fa-sun', shortLabel: 'início' },

    { label: 'Cadastro de Usuários', action: this.onClick.bind(this), icon:'po-icon-users', shortLabel: 'Usuários' },
    
    { label: 'Área de Diplomação', action: this.onClick.bind(this), icon:'fas fa-graduation-cap', shortLabel: 'Ferramentas' },
    { label: 'Gerar Diplomados', action: this.onClick.bind(this), icon:'fas fa-user-graduate', shortLabel: 'Diplomados' },
    { label: 'Assinar Diplomados', action: this.onClick.bind(this), icon:'fas fa-pen', shortLabel: 'Assinaturas' },
    
  ];

  private onClick() {
    alert('Clicked in menu item')
  } */
}

