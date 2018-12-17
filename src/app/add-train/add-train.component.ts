import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.scss']
})
export class AddTrainComponent implements OnInit {

  addTrainForm: any;
  photoFile: File;

  constructor(private fb: FormBuilder, private trainService: TrainService, private router: Router) { }

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

    const train = new FormData();
    train.append('photo', this.photoFile);
    train.append('locoAddress', addTrainForm.value.locoAddress);
    train.append('length', addTrainForm.value.length);
    train.append('carts', addTrainForm.value.carts);
    train.append('name', addTrainForm.value.name);
    train.append('description', addTrainForm.value.description);
    this.trainService.addTrain(train)
      .subscribe( response => {
        console.log(response.status);
        if(response.status === 200) {
          console.log('Train created');
          this.router.navigate(['dashboard/train/interface']);
        }
      });
  }

  onFileChanged(event) {
    this.photoFile = event.target.files[0];
  }

}
