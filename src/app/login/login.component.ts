import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(loginForm) {

    if (loginForm.valid) {
      const user = loginForm.value as User;
      console.log(user);
      this.userService.login(user).subscribe(response => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.token);
          localStorage.setItem('access_token', response.token);
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

}
