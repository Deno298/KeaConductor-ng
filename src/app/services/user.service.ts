import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { emailValidator } from '../services/validator';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient, private router: Router) { }

  addUserForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, emailValidator])
  });

  initializeFormGroup() {
    this.addUserForm.setValue({
      id: null,
      firstName: '',
      email: '',
      lastName: '',
    });
  }


  login(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', user);
  }

  addUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/create-user', user);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/get-users');
  }

  deleteUser(email: string): Observable<any> {
    console.log(email);
    const url = `${this.baseUrl}/delete-user/${email}`;
    console.log(url);
    return this.http.delete<any>(url);
  }

  updateUser(user: User): Observable<any> {
    console.log(user);
    const url = `${this.baseUrl}/update-user`;
    return this.http.put<any>(url, user);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['frontpage']);
  }

  populateForm(user) {
    this.addUserForm.setValue(user);
  }
}
