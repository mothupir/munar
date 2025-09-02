import { TestBed } from '@angular/core/testing';

import { AptosKeyless } from './aptos-keyless';

describe('AptosKeyless', () => {
  let service: AptosKeyless;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptosKeyless);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
