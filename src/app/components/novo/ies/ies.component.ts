import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ies',
  templateUrl: './ies.component.html',
  styleUrls: ['./ies.component.scss']
})
export class IesComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
    scrollTo(10, 0);
  }

}
