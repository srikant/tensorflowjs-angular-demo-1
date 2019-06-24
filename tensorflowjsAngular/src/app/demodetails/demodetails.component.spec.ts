import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodetailsComponent } from './demodetails.component';

describe('DemodetailsComponent', () => {
  let component: DemodetailsComponent;
  let fixture: ComponentFixture<DemodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
