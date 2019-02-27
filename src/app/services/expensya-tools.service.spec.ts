import { TestBed } from '@angular/core/testing';

import { ExpensyaToolsService } from './expensya-tools.service';

describe('ExpensyaToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensyaToolsService = TestBed.get(ExpensyaToolsService);
    expect(service).toBeTruthy();
  });
});
