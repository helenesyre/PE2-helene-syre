import {
  ProfileResponse,
  VenuesResponse,
  SingleVenueResponse,
  LoginRequest,
  LoginResponse,
  ManageVenueRequest,
  ManageVenueResponse,
  RegisterRequest,
  ProfileBookingResponseData,
  ApiResponse,
  CreateBookingResponseData,
  CreateBookingRequest,
} from "./types";

// Fetch user profile from the API
export function getProfile(
  profileName: string,
  accessToken: string,
): Promise<ProfileResponse> {
  const apiUrl =
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/profiles/" + profileName;
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Profile not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch profile`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Fetch all venues from the API
export function getVenues({
  sortOrder = "desc",
  sortBy,
  limit,
  page,
  search,
}: {
  sortOrder?: string;
  sortBy?: string;
  limit?: number;
  page?: number;
  search?: string;
}): Promise<VenuesResponse> {
  let reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/venues",
  );
  if (search && search.trim() !== "") {
    reqUrl = new URL(
      process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/venues/search",
    );
    reqUrl.searchParams.set("q", search);
  }
  reqUrl.searchParams.set("sortOrder", sortOrder);
  reqUrl.searchParams.set("sort", sortBy || "created");
  if (page) {
    reqUrl.searchParams.set("page", page.toString());
  }
  if (limit) {
    reqUrl.searchParams.set("limit", limit.toString());
  }

  return fetch(reqUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Venues not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch venues`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Fetch a single venue by ID from the API
export function getVenueById(venueId: string): Promise<SingleVenueResponse> {
  const apiUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/venues/" + venueId,
  );
  apiUrl.searchParams.set("_owner", "true");
  apiUrl.searchParams.set("_bookings", "true");
  return fetch(apiUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Venue not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch venue`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Fetch venues created by a specific profile from the API
export function getVenuesByProfile(
  profileId: string,
  accessToken: string,
): Promise<VenuesResponse> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL +
      `holidaze/profiles/${profileId}/venues`,
  );
  reqUrl.searchParams.set("_bookings", "true");
  return fetch(reqUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Venues not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch venues`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Delete a venue using the API
export function deleteVenue({
  accessToken,
  venueId,
}: {
  accessToken: string;
  venueId: string;
}): Promise<void> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + `holidaze/venues/${venueId}`,
  );
  return fetch(reqUrl.toString(), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Venue not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to delete venue`);
      }
    })
    .catch((error) => {
      throw error;
    });
}

// Login
export function postLogin(data: LoginRequest): Promise<LoginResponse> {
  const apiUrl =
    process.env.NEXT_PUBLIC_BASE_API_URL + "auth/login?_holidaze=true";
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Invalid email or password");
      }
      if (!res.ok) {
        throw new Error(`Failed to authenticate`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Register
export function postRegister(data: RegisterRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL + "auth/register";
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.username,
      email: data.email,
      password: data.password,
      venueManager: data.venueManager,
    }),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 404) return null;
      if (!res.ok) {
        throw new Error(`Failed to authenticate`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Create a new venue using the API
export function createVenue({
  accessToken,
  data,
}: {
  accessToken: string;
  data: ManageVenueRequest;
}): Promise<ManageVenueResponse> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/venues",
  );
  return fetch(reqUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Invalid form");
      }
      if (!res.ok) {
        throw new Error(`Failed to authenticate`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Update venue using the API
export function updateVenue({
  accessToken,
  id,
  data,
}: {
  accessToken: string;
  id: string;
  data: ManageVenueRequest;
}): Promise<ManageVenueResponse> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/venues/" + id,
  );
  return fetch(reqUrl.toString(), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Invalid form");
      }
      if (!res.ok) {
        throw new Error(`Failed to authenticate`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Fetch venues created by a specific profile from the API
export function getBookingsByProfile(
  profileId: string,
  accessToken: string,
): Promise<ApiResponse<ProfileBookingResponseData[]>> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL +
      `holidaze/profiles/${profileId}/bookings`,
  );
  reqUrl.searchParams.set("_venue", "true");
  return fetch(reqUrl.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Venues not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to fetch venues`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Create a booking using the API
export function createBooking({
  accessToken,
  data,
}: {
  accessToken: string;
  data: CreateBookingRequest;
}): Promise<ApiResponse<CreateBookingResponseData>> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + "holidaze/bookings",
  );
  return fetch(reqUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Invalid form");
      }
      if (!res.ok) {
        throw new Error(`Failed to authenticate`);
      }
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
}

// Delete a booking using the API
export function deleteBooking({
  accessToken,
  bookingId,
}: {
  accessToken: string;
  bookingId: string;
}): Promise<void> {
  const reqUrl = new URL(
    process.env.NEXT_PUBLIC_BASE_API_URL + `holidaze/bookings/${bookingId}`,
  );
  return fetch(reqUrl.toString(), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken || ""}`,
      "X-Noroff-API-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  })
    .then((res) => {
      if (res.status === 400 || res.status === 401 || res.status === 404) {
        throw new Error("Booking not found");
      }
      if (!res.ok) {
        throw new Error(`Failed to delete booking`);
      }
    })
    .catch((error) => {
      throw error;
    });
}
