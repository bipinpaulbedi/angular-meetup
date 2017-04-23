import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicWebWorkersComponent } from './dynamic-web-workers.component';

describe('DynamicWebWorkersComponent', () => {
  let component: DynamicWebWorkersComponent;
  let fixture: ComponentFixture<DynamicWebWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicWebWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicWebWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
