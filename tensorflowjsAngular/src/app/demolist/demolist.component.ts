import { Component, OnInit } from '@angular/core';
import { demos } from './../shared/demos';
@Component({
  selector: 'app-demolist',
  templateUrl: './demolist.component.html',
  styleUrls: ['./demolist.component.sass']
})
export class DemolistComponent implements OnInit {

  demos: any;

  constructor() { }

  ngOnInit() {
    this.demos = demos;

  }

}
