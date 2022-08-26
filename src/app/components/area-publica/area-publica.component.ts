import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-area-publica',
  templateUrl: './area-publica.component.html',
  styleUrls: ['./area-publica.component.scss']
})
export class AreaPublicaComponent implements OnInit {
    
  protected aFormGroup!: FormGroup;
  siteKey:string = "6LfvXakhAAAAAA_TFgRApr5alw0mHyvaSEU_iY-C";


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

}
