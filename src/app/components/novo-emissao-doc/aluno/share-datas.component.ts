import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-datas',
  templateUrl: './share-datas.component.html',
  styleUrls: ['./share-datas.component.scss']
})
export class ShareDatasComponent implements OnInit {
  
  info:any[]=[]

  
  constructor() { }

  ngOnInit(): void {
  }
  
  view(info:any){
   console.log(info)
  }
}
