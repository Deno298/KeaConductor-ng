import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.scss']
})
export class EditTrainComponent implements OnInit {

  updateTrainForm: any;

  constructor(private fb: FormBuilder, private trainService: TrainService) { }

  ngOnInit() {
    this.updateTrainForm = this.fb.group({
      locoAddress: [''],
      length: [''],
      carts: [''],
      name: [''],
      description: ['']
    });
  }

  updateTrain(form) {
    console.log(form);
  }

}
