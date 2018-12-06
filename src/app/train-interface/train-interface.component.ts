import { Component, OnInit } from '@angular/core';
import { Train } from '../entities/Train';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'app-train-interface',
  templateUrl: './train-interface.component.html',
  styleUrls: ['./train-interface.component.scss']
})
export class TrainInterfaceComponent implements OnInit {

  constructor(private trainService: TrainService) { }

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
}
