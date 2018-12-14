import { Component, OnInit } from '@angular/core';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';
import { EditTrainComponent } from '../edit-train/edit-train.component';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-train-interface',
  templateUrl: './train-interface.component.html',
  styleUrls: ['./train-interface.component.scss']
})
export class TrainInterfaceComponent implements OnInit {

  constructor(private trainService: TrainService, public dialog: MatDialog) { }

  trains: Train[];

  ngOnInit() {
    this.getTrains();
  }

  getTrains() {
    return this.trainService.getTrains()
      .subscribe(
        trains => {
          console.log(trains);
          this.trains = trains;
        });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '90%';
    this.dialog.open(EditTrainComponent, dialogConfig);
  }
}
