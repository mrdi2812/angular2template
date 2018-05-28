import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name:'reverseStr'})
export class ReverseStr implements PipeTransform{
    transform(value: string): string {
        let newStr: string = "";
        for (var i = value.length - 1; i >= 0; i--) {
          newStr += value.charAt(i);
        }
        return newStr;
      }
}
@Pipe({name: 'uselessPipe'})
export class UselessPipe implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value.toUpperCase()} ${after}`;
    return newStr;
  }
}