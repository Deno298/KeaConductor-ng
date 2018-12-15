import { Component, OnInit } from '@angular/core';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';
import { EditTrainComponent } from '../edit-train/edit-train.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-train-interface',
  templateUrl: './train-interface.component.html',
  styleUrls: ['./train-interface.component.scss']
})
export class TrainInterfaceComponent implements OnInit {

  constructor(private trainService: TrainService, private userService: UserService, public dialog: MatDialog) { }

  trains: Train[];

  ngOnInit() {
    this.getTrains();
  }

  getTrains() {
    return this.trainService.getTrains()
      .subscribe(
        response => {
          console.log(response);
          if (response.status === 200) {
          this.trains = response.trains;
        } else if (response.status === 401) {
          this.userService.logout();
        }
      });
  }

  onDelete(trainName) {
    this.trainService.deleteTrain(trainName).subscribe(
      response => {
        console.log(response.status);
        if (response.status === 200) {
          this.ngOnInit();
        } else if (response.status === 401) {
          this.userService.logout();
        }
      });
  }

  onEdit(train) {
    console.log(train);
    this.trainService.populateForm(train);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    this.dialog.open(EditTrainComponent, dialogConfig);
  }
}
