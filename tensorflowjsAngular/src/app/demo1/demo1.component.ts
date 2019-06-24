import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from './../shared/drawable.directive';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.sass']
})
export class Demo1Component implements OnInit {

  linearModel: tf.Sequential;
  prediction: any;
  predictedNumber: string;

  model: tf.Model;
  predictions: any;

  @ViewChild(DrawableDirective) canvas;

  constructor() { }

  ngOnInit() {
    this.loadModel();
  }

   //// LOAD PRETRAINED KERAS MODEL ////

   async loadModel() {
    this.model = await tf.loadModel('/assets/model.json');
  }

  async predict(imageData: ImageData) {

    const pred = await tf.tidy(() => {

      // Convert the canvas pixels to
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28, 1]);
      img = tf.cast(img, 'float32');

      // Make and format the predications
      const output = this.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());

      for (let i = 0; i < this.predictions.length; i++) {
        if (this.predictions[i] == "1") {
          this.predictedNumber = i.toString();
        }
      }
      if (this.predictedNumber == "") {
        this.predictedNumber = ":(";
      }
    });

  }

  clear() {
    this.predictedNumber = "";
  }

}
