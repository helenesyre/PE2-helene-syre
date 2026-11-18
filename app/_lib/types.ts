import { LucideIcon } from "lucide-react";

// Reusable types
export type ImageData = {
  url: string;
  alt: string;
};

// Login and registration types
export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  venueManager: boolean;
};

export type LoginResponseData = {
  name: string;
  email: string;
  avatar: ImageData;
  banner: ImageData;
  accessToken: string;
  venueManager: boolean;
};

export type LoginResponse = {
  data: LoginResponseData;
  meta: object;
};

// Profile types
export type ProfileCountData = {
  venues: number;
  bookings: number;
};

export type ProfileResponseData = {
  name: string;
  email: string;
  bio: string;
  avatar: ImageData;
  banner: ImageData;
  venueManager: boolean;
  _count: ProfileCountData;
};

export type ProfileResponse = {
  data: ProfileResponseData;
  meta: object;
};

// Navigation types
export type NavLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  disabled?: boolean;
  onClick?: () => void;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
  disabled?: boolean;
};

// Venue types
export type VenueMeta = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
};

export type VenueLocation = {
  address: string;
  city: string;
  zip: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
};

export type VenueResponseData = {
  id: string;
  name: string;
  description: string;
  media: ImageData[];
  price: number;
  maxGuests: number;
  rating: number;
  created: string;
  updated: string;
  meta: VenueMeta;
  location: VenueLocation;
};

// All venues response type
export type VenuesResponse = {
  data: VenueResponseData[];
  meta: PaginationMeta;
};

// Single venue response type
export type SingleVenueResponse = {
  data: VenueResponseData;
  meta: object;
};
