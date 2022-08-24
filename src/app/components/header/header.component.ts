import { Component, OnInit } from '@angular/core';
import { PoToolbarModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  alt:boolean = false;
    
  showConfig(){
    this.alt = !this.alt;
  }

  ngOnInit(): void {
  }

}
