import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemolistComponent } from './demolist/demolist.component';
import { DemodetailsComponent } from './demodetails/demodetails.component';
import { ChartsModule } from 'ng2-charts';
import { DrawableDirective } from './shared/drawable.directive';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
@NgModule({
  declarations: [
    AppComponent,
    DemolistComponent,
    DemodetailsComponent,
    DrawableDirective,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
