import { TestBed } from '@angular/core/testing';

import { ConsultaApiWordpressService } from './consulta-api-wordpress-productos.service';

describe('ConsultaApiWordpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaApiWordpressService = TestBed.get(ConsultaApiWordpressService);
    expect(service).toBeTruthy();
  });
});
