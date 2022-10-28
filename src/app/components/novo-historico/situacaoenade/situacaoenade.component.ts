import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { BackconnectService } from 'src/app/service/backconnect.service';
import { FormBuilder,FormGroup,FormControl,FormArray,ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-situacaoenade',
  templateUrl: './situacaoenade.component.html',
  styleUrls: ['./situacaoenade.component.scss']
})
export class SituacaoenadeComponent implements OnInit {
 

  @Input() curso:any;
  @Input() enable3:any;
  @Output() buttonClick4 = new EventEmitter();
  enable4:boolean = false; 
  @Output() alunosSelecionados = new EventEmitter();
  @Output() view = new EventEmitter();

  
  sitacaoEnade:any;
  cursoSelecionado:any
  dataFim:any[]=[];
  dataInicio:any[]=[];
  dataRegistro:any[]=[];


  constructor(private service:BackconnectService) { }

  ngOnInit(): void {
    this.service.listarSitacaoEnade().subscribe((res):any=>{
      this.sitacaoEnade = res;
    
    });
  }



  userForm = new FormGroup({
    'condicao': new FormControl('',Validators.required),
    'edicao': new FormControl('',Validators.required),
    'motivo': new FormControl('',Validators.required),
    'situacao': new FormControl('',Validators.required),
  });
  
  ngSubmit(){
  
    this.enable3 = false;
    this.enable4 = this.enable4 == false ? true : false;
    this.buttonClick4.emit(this.enable4)
    this.alunosSelecionados.emit(this.userForm.value)

  }

  refresh(){
    location.reload()
  }

}
