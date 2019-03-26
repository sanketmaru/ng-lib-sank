import { TestBed } from '@angular/core/testing';

import { NgLibSankService } from './ng-lib-sank.service';

describe('NgLibSankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLibSankService = TestBed.get(NgLibSankService);
    expect(service).toBeTruthy();
  });
});
