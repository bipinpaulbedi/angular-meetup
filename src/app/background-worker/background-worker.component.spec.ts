import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundWorkerComponent } from './background-worker.component';

describe('BackgroundWorkerComponent', () => {
  let component: BackgroundWorkerComponent;
  let fixture: ComponentFixture<BackgroundWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
