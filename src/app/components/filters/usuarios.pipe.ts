import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarios'
})
export class UsuariosPipe implements PipeTransform {

  transform(valueU: any, sUsuario:string): any {
    if(sUsuario ===""){
      return valueU;
    }
    
      
    const dadosArray:any[]=[];

     for(let i=0;i<=valueU.length;i++){

      let Nome:string= valueU[i].Nome;
      let Email:string= valueU[i].Email;
      let Ativo:string= valueU[i].Ativo;
      let Criadoem:string= valueU[i].Criadoem;

      if(Nome.toLowerCase().startsWith(sUsuario) || 
         Email.toLowerCase().startsWith(sUsuario) ||
         Ativo.toLowerCase().startsWith(sUsuario) ||
         Criadoem.toLowerCase().startsWith(sUsuario)
      ){
        dadosArray.push(valueU[i]);

        return dadosArray;
     }
    
    }
  
  }

}
