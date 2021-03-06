import {FacilityType} from './FacilityType';
import {RentType} from './RentType' ;

export interface Facility {
  id: number;
  name: string;
  code?: string;
  image?: string;
  rentType?: RentType;
  cost?: number;
  area?: number;
  maximumPeople?: number;
  roomStandard?: string;
  description?: string;
  poolSquare?: number;
  numberFloor?: number;
  facilityType?: FacilityType;
  freeServiceInclude?: string;
}
