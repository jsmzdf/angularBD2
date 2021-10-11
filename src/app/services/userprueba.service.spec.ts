import { TestBed } from '@angular/core/testing';

import { UserpruebaService } from './userprueba.service';

describe('UserpruebaService', () => {
  let service: UserpruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
