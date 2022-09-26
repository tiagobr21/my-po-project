import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emissao'
})
export class EmissaoPipe implements PipeTransform {

  transform(valueE: any, sEmissao:string): any {
    if(sEmissao ===""){
      return valueE;
    }

    console.log(valueE);

    const dadosArray:any[]=[];

     for(let i=0;i<=valueE.length;i++){
      let CodigoValidacao:string=valueE[i].CodigoValidacao;
      let IdDiploma:string=valueE[i].IdDiploma;
      let Origem:string=valueE[i].Origem;
      let Situacao:string=valueE[i].Situacao;
      let DataEmissao:string=valueE[i].DataEmissao;
      let UltimaAtualizacao:string=valueE[i].UltimaAtualizacao;
      let Usuario:string=valueE[i].Usuario;

      if(IdDiploma.toLowerCase().startsWith(sEmissao) || 
         CodigoValidacao.toLowerCase().startsWith(sEmissao) ||
         Origem.toLowerCase().startsWith(sEmissao) ||
         Situacao.toLowerCase().startsWith(sEmissao) ||
         DataEmissao.toLowerCase().startsWith(sEmissao) ||
         UltimaAtualizacao.toLowerCase().startsWith(sEmissao) ||
         Usuario.toLowerCase().startsWith(sEmissao)

      ){
        dadosArray.push(valueE[i]);

        return dadosArray;
     }
    
    }
  
    

  }

}
