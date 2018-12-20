import { TestBed } from '@angular/core/testing';

import { RdvmailService } from './rdvmail.service';

describe('RdvmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RdvmailService = TestBed.get(RdvmailService);
    expect(service).toBeTruthy();
  });
});
