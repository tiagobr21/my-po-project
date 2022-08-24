import { TestBed } from '@angular/core/testing';

import { BackconnectService } from './backconnect.service';

describe('BackconnectService', () => {
  let service: BackconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
