import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRideComponent } from './my-ride.component';

describe('MyRideComponent', () => {
  let component: MyRideComponent;
  let fixture: ComponentFixture<MyRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
