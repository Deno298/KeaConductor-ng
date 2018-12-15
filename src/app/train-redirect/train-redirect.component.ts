import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-train-redirect',
  templateUrl: './train-redirect.component.html',
  styleUrls: ['./train-redirect.component.scss']
})
export class TrainRedirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['dashboard/train/interface']);
  }

}
