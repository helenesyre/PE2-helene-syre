import { ProfileResponse } from "./types";

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
