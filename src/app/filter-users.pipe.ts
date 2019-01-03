import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(list: any, args?: any): any {

    list.filter = args.trim().toLowerCase();
    const userList: any[] = list.filteredData;
    return userList;
  }
}
