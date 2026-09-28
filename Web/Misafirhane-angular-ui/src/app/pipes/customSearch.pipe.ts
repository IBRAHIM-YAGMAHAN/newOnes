import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turkishSearch'
})
export class TurkishSearchPipe implements PipeTransform {
  transform(items: any[], term: string, field: string): any[] {
    if (!term || !items) return items;
    term = term.toLocaleLowerCase('tr-TR');
    return items.filter(item => 
      item[field]?.toLocaleLowerCase('tr-TR').includes(term)
    );
  }
}
