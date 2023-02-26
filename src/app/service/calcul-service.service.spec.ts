import { TestBed } from '@angular/core/testing';

import { CalculServiceService } from './calcul-service.service';

describe('CalculServiceService', () => {
  let service: CalculServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
