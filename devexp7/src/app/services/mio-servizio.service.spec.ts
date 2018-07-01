import { TestBed, inject } from '@angular/core/testing';

import { MioServizioService } from './mio-servizio.service';

describe('MioServizioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MioServizioService]
    });
  });

  it('should be created', inject([MioServizioService], (service: MioServizioService) => {
    expect(service).toBeTruthy();
  }));
});
