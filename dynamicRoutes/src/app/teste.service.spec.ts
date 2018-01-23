import { TestBed, inject } from '@angular/core/testing';

import { TesteService } from './teste.service';

fdescribe('TesteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteService]
    });
  });

  it('should be created', inject([TesteService], (service: TesteService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([TesteService], (service: TesteService) => {

    let invoked = 0;

    service.getPerson(55).subscribe(() => {
       invoked++;
    })

    expect(invoked).toEqual(0);
  }));

});
