import { LucideIcon } from "lucide-react";

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

export type ProfileImageData = {
  url: string;
  alt: string;
};

export type LoginResponseData = {
  name: string;
  email: string;
  avatar: ProfileImageData;
  banner: ProfileImageData;
  accessToken: string;
  venueManager: boolean;
};

export type LoginResponse = {
  data: LoginResponseData;
  meta: object;
};

export type ProfileCountData = {
  venues: number;
  bookings: number;
};

export type ProfileResponseData = {
  name: string;
  email: string;
  bio: string;
  avatar: ProfileImageData;
  banner: ProfileImageData;
  venueManager: boolean;
  _count: ProfileCountData;
};

export type ProfileResponse = {
  data: ProfileResponseData;
  meta: object;
};

export type NavLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
  disabled?: boolean;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
  disabled?: boolean;
};
