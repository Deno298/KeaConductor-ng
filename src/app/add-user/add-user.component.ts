import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { emailValidator } from '../services/validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, emailValidator]]
    });
  }

  onSubmit(addUserForm) {

    if (addUserForm.valid) {
      const user = addUserForm.value as User;
      console.log(user);
      console.log(addUserForm);
      this.userService.addUser(user).subscribe(response => {
        console.log(response);
        if (response.status === 200) {
          this.router.navigate(['/dashboard/user/all']);
      }
    });
  }
}
}
