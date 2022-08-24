import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-registro',
  templateUrl: './livro-registro.component.html',
  styleUrls: ['./livro-registro.component.scss']
})
export class LivroRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollTo(10, 0);
  }

}
