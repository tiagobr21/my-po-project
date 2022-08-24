import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.scss']
})
export class AssinaturaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollTo(10, 0);
  }

}
