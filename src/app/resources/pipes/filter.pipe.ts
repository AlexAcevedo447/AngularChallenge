import { Pipe, PipeTransform } from '@angular/core';
import { searchResultsAll } from '../interfaces/generic.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(lista: searchResultsAll['results'], texto: string): unknown {
    if (texto.trim().length == 0) {
      return lista;
    } else {
      return lista.filter((meal) => meal.name.includes(texto));
    }
  }
}
