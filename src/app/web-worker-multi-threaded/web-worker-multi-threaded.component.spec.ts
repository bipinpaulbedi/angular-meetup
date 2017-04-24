import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerMultiThreadedComponent } from './web-worker-multi-threaded.component';

describe('WebWorkerMultiThreadedComponent', () => {
  let component: WebWorkerMultiThreadedComponent;
  let fixture: ComponentFixture<WebWorkerMultiThreadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkerMultiThreadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerMultiThreadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
