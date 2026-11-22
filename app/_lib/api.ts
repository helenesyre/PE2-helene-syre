import { ProfileResponse, VenuesResponse, SingleVenueResponse } from "./types";

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
  const apiUrl =
    process.env.NEXT_PUBLIC_BASE_API_URL +
    "holidaze/venues/" +
    venueId +
    "?_owner=true";
  return fetch(apiUrl, {
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
