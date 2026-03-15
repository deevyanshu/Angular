import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconvertor',
})
export class CurrencyconvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    
    if(args.length>0)
    {
      let [data]=args;
      return value*data;
    }

    return value*90; 
  }
}
