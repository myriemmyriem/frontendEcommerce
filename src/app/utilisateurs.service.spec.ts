import { TestBed, inject } from '@angular/core/testing';

import { UtilisateursService } from './utilisateurs.service';

describe('UtilisateursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilisateursService]
    });
  });

  it('should be created', inject([UtilisateursService], (service: UtilisateursService) => {
    expect(service).toBeTruthy();
  }));
});
