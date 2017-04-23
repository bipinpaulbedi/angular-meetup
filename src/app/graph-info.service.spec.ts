import { TestBed, inject } from '@angular/core/testing';

import { GraphInfoService } from './graph-info.service';

describe('GraphInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphInfoService]
    });
  });

  it('should ...', inject([GraphInfoService], (service: GraphInfoService) => {
    expect(service).toBeTruthy();
  }));
});
