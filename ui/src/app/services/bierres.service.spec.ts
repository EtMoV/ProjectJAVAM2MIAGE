import { TestBed } from '@angular/core/testing';

import { BierresService } from './bierres.service';

describe('BierresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BierresService = TestBed.get(BierresService);
    expect(service).toBeTruthy();
  });
});
