"use client";
import { useQuery } from "@tanstack/react-query";
import VenueCard from "../cards/VenueCard";
import { VenuesResponse } from "@/app/_lib/types";
import { getVenues } from "@/app/_lib/api";

export default function VenuesGrid() {
  const {
    isPending,
    isError,
    data: venuesData,
    error,
  } = useQuery<VenuesResponse>({
    queryKey: ["venues"],
    queryFn: () => getVenues({ limit: 12 }),
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
