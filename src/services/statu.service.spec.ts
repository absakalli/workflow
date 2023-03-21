import { TestBed } from '@angular/core/testing';

import { StatuService } from './statu.service';

describe('StatuService', () => {
  let service: StatuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
