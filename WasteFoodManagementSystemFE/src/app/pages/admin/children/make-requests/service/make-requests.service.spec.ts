import { TestBed } from '@angular/core/testing';

import { MakeRequestsService } from './make-requests.service';

describe('MakeRequestsService', () => {
  let service: MakeRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
