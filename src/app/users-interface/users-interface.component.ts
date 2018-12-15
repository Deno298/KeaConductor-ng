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
export class UsersInterfaceComponent implements OnInit {;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }



  ngOnInit() {
    this.router.navigate(['dashboard/user']);
  }

}
