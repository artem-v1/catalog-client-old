import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(value: any[], category: string): any[] {
    return value.filter(item => item.category === category);
  }
}

