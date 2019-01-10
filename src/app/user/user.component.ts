import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';
import { FilterUsersPipe } from '../filter-users.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private dialog: MatDialog, private userPipe: FilterUsersPipe) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.userService.getUsers().subscribe(
      list => {
        console.log(list)
        console.log(list.status);
        if (list.status === 200) {
          this.listData = new MatTableDataSource(list.users);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
      } else if (list.status === 401) {
          this.userService.logout();
      }
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.userPipe.transform(this.listData, this.searchKey);
  }

  onDelete(email) {
    return this.userService.deleteUser(email)
      .subscribe(response => {
        console.log(response.status);
        if (response.status === 200) {
          this.ngOnInit();
        } else if (response.status === 401) {
          this.userService.logout();
        }
      });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddUserComponent, dialogConfig);
  }

  onEdit(row) {
    this.userService.populateForm(row);
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddUserComponent, dialogConfig);
  }

}
