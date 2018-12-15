import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.scss']
})
export class EditTrainComponent implements OnInit {

  photoFile: File;

  constructor(public trainService: TrainService, private dialogRef: MatDialogRef<EditTrainComponent>, private router: Router) { }

  ngOnInit() {

  }

  editTrain(trainForm) {
    console.log(trainForm);
      const train = trainForm.value as Train;
      train.originalName = trainForm.value.name;
      console.log(train.originalName);
      this.trainService.updateTrain(train).subscribe();
      this.trainService.editTrainForm.reset();
      this.trainService.initializeFormGroup();
      this.onClose();
}

  onFileChanged(event) {
    this.photoFile = event.target.files[0];

  }

  onClose() {
    this.trainService.editTrainForm.reset();
    this.trainService.initializeFormGroup();
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe( () => {
      this.router.navigate(['dashboard/train-redirect']);
    });
  }
}
