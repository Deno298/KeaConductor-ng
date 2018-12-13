import { Component, OnInit } from '@angular/core';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-users-interface',
  templateUrl: './users-interface.component.html',
  styleUrls: ['./users-interface.component.scss']
})
export class UsersInterfaceComponent implements OnInit {

  users: User[];
  updateForm: any;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }



  ngOnInit() {

    this.getUsers();
    this.updateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      originalEmail: ['']
    });
  }

  getUsers() {
    return this.userService.getUsers()
      .subscribe(
        users => {
          console.log(users);
          this.users = users;
        });

  }

  deleteUser(email) {
    return this.userService.deleteUser(email)
      .subscribe(response => {
        console.log(response.status);
        if (response.status === 200) {
          this.ngOnInit();
        }
      });
  }

 updateUser(email, updateForm) {
    console.log(email);
    const user = updateForm.value as User;
    user.originalEmail = email;
    console.log(user);
    return this.userService.updateUser(user)
      .subscribe(response => {
        console.log(response.status);
        if (response.status === 200) {
          this.ngOnInit();
        }
      });
  }

}
