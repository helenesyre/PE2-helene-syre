"use client";
import { getVenues } from "@/app/_lib/api";
import VenueCard from "../cards/VenueCard";
import { VenuesResponse } from "@/app/_lib/types";
import { useQuery } from "@tanstack/react-query";

export default function PopularPlacesGrid() {
  const {
    isPending,
    isError,
    data: venuesData,
    error,
  } = useQuery<VenuesResponse>({
    queryKey: ["venues"],
    queryFn: () => getVenues({ limit: 4 }),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message || "An error occurred"}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {venuesData.data.map((venue, key) => (
        <VenueCard key={key} venueData={venue} />
      ))}
    </div>
  );
}
