import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { emailValidator } from '../services/validator';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router,
    public dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
  }

  onSubmit(addUserForm) {
    if (addUserForm.valid) {
      if (!this.userService.addUserForm.get('id').value) {
        const user = addUserForm.value as User;
        this.userService.addUser(user).subscribe(response => {
          // if (response.status === 401) {
          //this.userService.logout();
          //}
        });
      } else {
        const user = addUserForm.value as User;
        console.log(user);
        this.userService.updateUser(user).subscribe(response => {
          if (response.status === 401) {
            this.userService.logout();
          }
        });
      }
      this.userService.initializeFormGroup();
      this.onClose();
    }
  }

  onClear() {
    this.userService.addUserForm.reset();
    this.userService.initializeFormGroup();
  }

  onClose() {
    this.userService.addUserForm.reset();
    this.userService.initializeFormGroup();
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['dashboard/redirect']);
    });
  }
}
