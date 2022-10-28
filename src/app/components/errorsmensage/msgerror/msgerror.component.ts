import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-msgerror',
  templateUrl: './msgerror.component.html',
  styleUrls: ['./msgerror.component.scss']
})
export class MsgerrorComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MsgerrorComponent>) { }

  ngOnInit(): void {
  }
  
  fecharModal(){

      this.dialogRef.close();
  }
}
