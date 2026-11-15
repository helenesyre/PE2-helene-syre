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
