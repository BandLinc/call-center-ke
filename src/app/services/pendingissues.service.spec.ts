import { TestBed } from '@angular/core/testing';

import { PendingissuesService } from './pendingissues.service';

describe('PendingissuesService', () => {
  let service: PendingissuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingissuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
