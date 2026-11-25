"use client";
import YourVenuesCard from "../cards/YourVenuesCard";
import { getVenuesByProfile } from "@/app/_lib/api";
import { useAuth } from "@/app/_lib/stores";
import { useQuery } from "@tanstack/react-query";
import type { VenuesResponse } from "@/app/_lib/types";

export default function YourVenuesGrid() {
  const { data: authData } = useAuth();
  const { isPending, isError, error, data } = useQuery<VenuesResponse>({
    queryKey: ["profileVenues"],
    queryFn: () =>
      getVenuesByProfile(authData?.name || "", authData?.accessToken || ""),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading venues: {error?.message}</p>;
  }

  const venues = data?.data ?? [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {venues.map((venue) => (
        <YourVenuesCard key={venue.id} venueData={venue} />
      ))}
      {venues.length === 0 && (
        <p className="col-span-full text-center text-stone-500 mb-20">
          No venues found.
        </p>
      )}
    </div>
  );
}
