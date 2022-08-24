import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroDiplomado'
})
export class FiltroDiplomadoPipe implements PipeTransform {

  transform(value_conforme: any, sConforme: string):  any {
    if(sConforme == ""){
      return value_conforme;
    }

    const readConforme:any[]=[];

    for(let i=0;i<value_conforme.length;i++){
       
      let conformeSearch:string=value_conforme[i];
      
      if(conformeSearch.startsWith(sConforme)){
        readConforme.push(value_conforme[i]);
         
      }  
    }

    return readConforme;
  }

}
