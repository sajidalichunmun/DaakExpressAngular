import { TestBed } from '@angular/core/testing';

import { PackettypeService } from './packettype.service';

describe('PackettypeService', () => {
  let service: PackettypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackettypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
