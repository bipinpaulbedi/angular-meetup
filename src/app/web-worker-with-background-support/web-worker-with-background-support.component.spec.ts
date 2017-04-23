import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerWithBackgroundSupportComponent } from './web-worker-with-background-support.component';

describe('WebWorkerWithBackgroundSupportComponent', () => {
  let component: WebWorkerWithBackgroundSupportComponent;
  let fixture: ComponentFixture<WebWorkerWithBackgroundSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWorkerWithBackgroundSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerWithBackgroundSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
