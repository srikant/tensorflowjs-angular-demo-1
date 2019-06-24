import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { demos } from './../shared/demos';
@Component({
  selector: 'app-demodetails',
  templateUrl: './demodetails.component.html',
  styleUrls: ['./demodetails.component.sass']
})
export class DemodetailsComponent implements OnInit {
 demo: any = [];
  constructor(
    private route: ActivatedRoute,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.demo = demos[+params.get('demoId')];
    });
  }
  backClicked() {
    this._location.back();
  }

}
