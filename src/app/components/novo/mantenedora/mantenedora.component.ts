import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenedora',
  templateUrl: './mantenedora.component.html',
  styleUrls: ['./mantenedora.component.scss']
})
export class MantenedoraComponent implements OnInit {

  constructor() { }
 



  ngOnInit(): void {
    scrollTo(10, 0);
  }

}
