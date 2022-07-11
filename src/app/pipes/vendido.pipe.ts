import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendido'
})
export class VendidoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == false){
      return 'Não';
    }
    if (value == true){
      return 'Sim';
    }
  }

}
