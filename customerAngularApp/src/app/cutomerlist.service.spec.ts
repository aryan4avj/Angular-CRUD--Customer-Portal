import { TestBed } from '@angular/core/testing';

import { CutomerlistService } from './cutomerlist.service';

describe('CutomerlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutomerlistService = TestBed.get(CutomerlistService);
    expect(service).toBeTruthy();
  });
});
