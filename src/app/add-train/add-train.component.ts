import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.scss']
})
export class AddTrainComponent implements OnInit {

  addTrainForm: any;

  constructor(private fb: FormBuilder, private trainService: TrainService) { }

  ngOnInit() {
    this.addTrainForm = this.fb.group({
      locoAddress: [''],
      length: [''],
      carts: [''],
      name: [''],
      description: ['']
    });
  }

  createTrain(addTrainForm) {

    const train = addTrainForm.value as Train;
    console.log(train);
    this.trainService.addTrain(train)
      .subscribe( response => {
        console.log(response.status);
        if(response.status === 200) {
          console.log('Train created');
        }
      });

  }

}
