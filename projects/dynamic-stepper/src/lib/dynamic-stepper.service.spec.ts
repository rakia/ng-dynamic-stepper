import { TestBed } from '@angular/core/testing';

import { DynamicStepperService } from './dynamic-stepper.service';

describe('DynamicStepperService', () => {
  let service: DynamicStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
