import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sliceGroups' })
export class SliceGroupsPipe implements PipeTransform {
  transform(array: any[], groupSize: number): any[][] {
    if (!array || !Array.isArray(array) || array.length === 0) return [];
    const size = (typeof groupSize === 'number' && groupSize > 0) ? Math.floor(groupSize) : 1;
    return array.map((item, i) => ({ ...item, index: i }))
      .reduce((acc, curr, i) => {
        if (i % size === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, []);
  }
}