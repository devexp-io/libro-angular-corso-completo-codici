import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], property: string, value:any): any {
    return array.filter(a => a[property] == value);
  }

}
