import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alunos'
})
export class AlunosPipe implements PipeTransform {

  transform(valueA: any, sAlunos:string): any {
    if(sAlunos ===""){
      return sAlunos;
    }
    
    console.log(valueA);

    const dadosArray:any[]=[];

     for(let i=0;i<=valueA.length;i++){

      let Nome:string= valueA[i].Dadosdiplomadiplomadonome;
      let Id:string= valueA[i].Dadosdiplomadiplomadoid;
      let Cpf:string= valueA[i].Dadosdiplomadiplomadocpf;
      let Grau:string= valueA[i].Dadosregistrolivroregistrodatacolacaograu;

      if(Nome.toLowerCase().startsWith(sAlunos) || 
         Id.toLowerCase().startsWith(sAlunos) ||
         Cpf.toLowerCase().startsWith(sAlunos) ||
         Grau.toLowerCase().startsWith(sAlunos)
      ){
        dadosArray.push(valueA[i]);

        return dadosArray;
     }
    
    }
  
  }

}
