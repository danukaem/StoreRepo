import { TestBed } from '@angular/core/testing';

import { TestService1Service } from './test-service1.service';

describe('TestService1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService1Service = TestBed.get(TestService1Service);
    expect(service).toBeTruthy();
  });
});
