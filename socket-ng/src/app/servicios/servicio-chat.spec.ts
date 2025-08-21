import { TestBed } from '@angular/core/testing';

import { ServicioChat } from './servicio-chat';

describe('ServicioChat', () => {
  let service: ServicioChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
