import { Component, OnInit } from '@angular/core';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-interface',
  templateUrl: './users-interface.component.html',
  styleUrls: ['./users-interface.component.scss']
})
export class UsersInterfaceComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
        });

  }

}
