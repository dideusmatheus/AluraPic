/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlatformDetectorService } from './platform-detector.service';

describe('Service: PlataformDetector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformDetectorService]
    });
  });

  it('should ...', inject([PlatformDetectorService], (service: PlatformDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
