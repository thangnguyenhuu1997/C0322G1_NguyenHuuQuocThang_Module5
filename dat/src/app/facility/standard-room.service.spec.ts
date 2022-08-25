import { TestBed } from '@angular/core/testing';

import { StandardRoomService } from './standard-room.service';

describe('StandardRoomService', () => {
  let service: StandardRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
