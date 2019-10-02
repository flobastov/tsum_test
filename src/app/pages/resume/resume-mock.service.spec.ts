import { TestBed, inject } from '@angular/core/testing';

import { ResumeMockService } from './resume-mock.service';

describe('ResumeMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeMockService]
    });
  });

  it('should be created', inject([ResumeMockService], (service: ResumeMockService) => {
    expect(service).toBeTruthy();
  }));
});
