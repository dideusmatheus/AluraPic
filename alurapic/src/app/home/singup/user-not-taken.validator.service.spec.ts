/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('Service: UserNotTaken.validator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTakenValidatorService]
    });
  });

  it('should ...', inject([UserNotTakenValidatorService], (service: UserNotTakenValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
