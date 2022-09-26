import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dados'
})
export class DadosAlunosPipe implements PipeTransform {

  transform(valueD: any, sDados:string) {
    console.log(sDados); 
    if(sDados ===""){
      
      return valueD;
    }
    
    console.log(valueD);

    const dadosArray:any[]=[];

     for(let i=0;i<=valueD.length;i++){

      let Nome:string= valueD[i].Dadosdiplomadiplomadonome;
      let Id:string= valueD[i].Dadosdiplomadiplomadoid;
      let Cpf:string= valueD[i].Dadosdiplomadiplomadocpf;
      let Grau:string= valueD[i].Dadosregistrolivroregistrodatacolacaograu;

      if(Nome.toLowerCase().startsWith(sDados) || 
         Id.toLowerCase().startsWith(sDados) ||
         Cpf.toLowerCase().startsWith(sDados) ||
         Grau.toLowerCase().startsWith(sDados)
      ){
        dadosArray.push(valueD[i]);

        return dadosArray;
     }
    
    }
  
  }

}
