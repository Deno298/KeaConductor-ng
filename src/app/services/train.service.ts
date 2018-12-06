import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../entities/Train';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addTrain(train): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-train`, train);
  }

  getTrains(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get-trains`);
  }
}
