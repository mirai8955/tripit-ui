import { User } from './user';

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface TripRoute {
  method: string; // e.g., "Shinkansen", "Walking"
  duration: string; // e.g., "2h 30min"
}

export interface TripSpot {
  id: string;
  name: string;
  description: string;
  arrivalTime?: string; // Optional arrival time
  location: GeoPoint;
  photos: string[];
  routeToNext: TripRoute | null;
}

export interface Trip {
  id: string;
  title: string;
  author: User;
  coverImageUrl: string;
  spots: TripSpot[];
  likes: number;
  shares: number;
} 