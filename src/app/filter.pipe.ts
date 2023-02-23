import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any[],argus:any,argus1:any): any {
    debugger;
    if(argus.length==0){
      return value;
    }
    if(argus1=='name'){
      return value.filter((x:any)=> (x[argus1]).toLowerCase().includes(argus.toLowerCase()))
    }
    else if(argus1=='Name'){
      return value.filter((x:any)=> (x[argus1]).toLowerCase().includes(argus.toLowerCase()))
     
    }
    //   return value.filter((x:any) =>x.Marks>= parseInt(argus));
    
    //return value.filter((x:any)=>{return x[argus1].toLowerCase().includes(argus.toLowerCase());});    
    
  }

}
