import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    console.log(value);
    console.log(args);
    return value/args[0];
  }

}
