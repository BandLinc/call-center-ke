import { TestBed } from '@angular/core/testing';

import { KpitargetsService } from './kpitargets.service';

describe('KpitargetsService', () => {
  let service: KpitargetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KpitargetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
