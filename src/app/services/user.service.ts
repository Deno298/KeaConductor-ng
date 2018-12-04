import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', user);
  }

  addUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/create-user', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/get-users');
  }

  deleteUser(email: String): Observable<any> {
    console.log(email);
    const url = `${this.baseUrl}/delete-user/${email}`;
    return this.http.delete<any>(url);
  }

  updateUser(user: User): Observable<any> {
    console.log(user);
    const url = `${this.baseUrl}/update-user`;
    return this.http.put<any>(url, user);
  }
}
