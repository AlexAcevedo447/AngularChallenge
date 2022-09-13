import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTrim',
})
export class StringTrim implements PipeTransform {
  transform(texto: string): unknown {
    return texto.slice(0,20)+"...";
  }
}