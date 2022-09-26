import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'historico'
})
export class HistoricoPipe implements PipeTransform {

  transform(valueH: any, sHistorico:string): any {
    if(sHistorico ===""){
      return valueH;
    }
    
 
    const dadosArray:any[]=[];

     for(let i=0;i<=valueH.length;i++){

      let IdDiploma:string=valueH[i].IdDiploma;
      let CodigoValidacao:string=valueH[i].CodigoValidacao;
      let Origem:string=valueH[i].Origem;
      let Situacao:string=valueH[i].Situacao;
      let DataEmissao:string=valueH[i].DataEmissao;
      let UltimaAtualizacao:string=valueH[i].UltimaAtualizacao;
      let Usuario:string=valueH[i].Usuario;

      if(IdDiploma.toLowerCase().startsWith(sHistorico) || 
         CodigoValidacao.toLowerCase().startsWith(sHistorico) ||
         Origem.toLowerCase().startsWith(sHistorico) ||
         Situacao.toLowerCase().startsWith(sHistorico) ||
         DataEmissao.toLowerCase().startsWith(sHistorico) ||
         UltimaAtualizacao.toLowerCase().startsWith(sHistorico) ||
         Usuario.toLowerCase().startsWith(sHistorico)

      ){
        dadosArray.push(valueH[i]);

        return dadosArray;
     }
    
    }
  
    

  }
}
