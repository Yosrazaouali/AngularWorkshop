import { TestBed } from '@angular/core/testing';

import { Pr.ServiceService } from './pr.service.service';

describe('Pr.ServiceService', () => {
  let service: Pr.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pr.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
