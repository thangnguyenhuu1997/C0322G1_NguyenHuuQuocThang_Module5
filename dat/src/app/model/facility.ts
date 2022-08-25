import {FacilityType} from './facility-type';
import {RentType} from './rent-type';
import {StandardRoom} from './standard-room';

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  rentType?: RentType;
  facilityType?: FacilityType;
  standardRoom?: StandardRoom;
  otherDescription?: string;
  poolArea?: number;
  numberFloor?: number;
  facilityFree?: string;
  image?: string;
}
