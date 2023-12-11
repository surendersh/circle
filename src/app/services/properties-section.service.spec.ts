import { TestBed } from '@angular/core/testing';

import { PropertiesSectionService } from './properties-section.service';

describe('PropertiesSectionService', () => {
  let service: PropertiesSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
