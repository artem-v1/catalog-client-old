// unique.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    const uniqueValues = new Set<any>();
    const result: any[] = [];

    value.forEach(item => {
      const itemValue = item[key];
      if (!uniqueValues.has(itemValue)) {
        uniqueValues.add(itemValue);
        result.push(itemValue);
      }
    });

    return result;
  }
}
