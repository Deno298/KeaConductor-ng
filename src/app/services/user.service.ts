import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
