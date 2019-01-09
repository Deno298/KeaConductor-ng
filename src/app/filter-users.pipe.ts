import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(list: any, searchKey: string): any {
    list.filter = searchKey.trim().toLowerCase();
    const userList: any[] = list.filteredData;
    return userList;
  }
}
