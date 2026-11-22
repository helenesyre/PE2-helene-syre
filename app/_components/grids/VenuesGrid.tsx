"use client";
import VenueCard from "../cards/VenueCard";
import { VenueResponseData } from "@/app/_lib/types";

export default function VenuesGrid({ data }: { data: VenueResponseData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((venue, key) => (
        <VenueCard key={key} venueData={venue} />
      ))}
      {data.length === 0 && (
        <p className="col-span-full text-center text-stone-500">
          No venues found.
        </p>
      )}
    </div>
  );
}
