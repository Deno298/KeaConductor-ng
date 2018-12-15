import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainRedirectComponent } from './train-redirect.component';

describe('TrainRedirectComponent', () => {
  let component: TrainRedirectComponent;
  let fixture: ComponentFixture<TrainRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
