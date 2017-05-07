import { TestBed, inject } from '@angular/core/testing';

import { GraphInfoMbService } from './graph-info-mb.service';

describe('GraphInfoMbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphInfoMbService]
    });
  });

  it('should ...', inject([GraphInfoMbService], (service: GraphInfoMbService) => {
    expect(service).toBeTruthy();
  }));
});
