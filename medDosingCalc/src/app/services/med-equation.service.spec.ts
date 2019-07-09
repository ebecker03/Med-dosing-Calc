import { TestBed } from '@angular/core/testing';

import { MedEquationService } from './med-equation.service';

describe('MedEquationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedEquationService = TestBed.get(MedEquationService);
    expect(service).toBeTruthy();
  });
});
