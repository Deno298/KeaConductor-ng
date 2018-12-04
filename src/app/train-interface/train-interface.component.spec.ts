import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainInterfaceComponent } from './train-interface.component';

describe('TrainInterfaceComponent', () => {
  let component: TrainInterfaceComponent;
  let fixture: ComponentFixture<TrainInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
