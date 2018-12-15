import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from '../entities/Train';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  editTrainForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    locoAddress: new FormControl('', Validators.required),
    length: new FormControl('', Validators.required),
    carts: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    photoName: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.editTrainForm.setValue({
      name: '',
      locoAddress: '',
      length: '',
      carts: '',
      description: '',
      photoName: ''
    });
  }

  addTrain(train): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create-train`, train);
  }

  getTrains(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-trains`);
  }

  deleteTrain(trainName: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete-train/${trainName}`);
  }

  updateTrain(train: Train): Observable<any> {
    const url = `${this.baseUrl}/update-train`;
    return this.http.put<any>(url, train);
  }

  populateForm(train) {
    this.editTrainForm.setValue(train);
  }

}
