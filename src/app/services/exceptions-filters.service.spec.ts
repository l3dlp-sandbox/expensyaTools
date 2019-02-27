import { TestBed } from '@angular/core/testing';

import { ExceptionsFiltersService } from './exceptions-filters.service';

describe('ExceptionsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceptionsFiltersService = TestBed.get(ExceptionsFiltersService);
    expect(service).toBeTruthy();
  });
});
