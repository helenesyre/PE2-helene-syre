"use client";
import { VenueDetailsCalendar } from "./VenueDetailsCalendar";
import VenuePolicies from "@/app/_components/grids/VenuePolicies";
import { getVenueById } from "@/app/_lib/api";
import { SingleVenueResponse } from "@/app/_lib/types";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/app/_lib/utils";
import { VenueDetailsImages } from "./VenueDetailsImages";
import { VenueDetailsInformation } from "./VenueDetailsInformation";

export default function VenueDetails() {
  const { venue_id: venueId } = useParams<{ venue_id: string }>();
  const {
    isPending,
    isError,
    data: venueData,
    error,
  } = useQuery<SingleVenueResponse>({
    queryKey: ["venue", venueId],
    queryFn: () => getVenueById(venueId),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message || "An error occurred"}</p>;
  }

  const venueCreated = formatDate(venueData.data.created);
  const venueUpdated = formatDate(venueData.data.updated);

  return (
    <section className="mt-6 md:mt-10 xl:mt-12 mb-24 px-6 md:px-10 lg:px-16 xl:px-40">
      {/* Image Gallery */}
      <VenueDetailsImages venueData={venueData.data} />
      <section className="mt-12 grid gap-20 lg:grid-cols-12">
        <VenueDetailsInformation venueData={venueData.data} />
        {/* Booking calendar - placeholder for future implementation */}
        <VenueDetailsCalendar venueData={venueData.data} />
      </section>
      <section className="flex flex-col gap-8 mt-20">
        <hr className="border border-cloud-white-600" />
        <div className="flex flex-col gap-2">
          <span className="label-text text-ocean-700">Venue information</span>
          <h2>Things you should know</h2>
        </div>
        <VenuePolicies />
        <hr className="border border-cloud-white-600" />
        <p className="text-deep-forest-400">
          Last changed: {venueUpdated ?? "No update date"} ・ Created:{" "}
          {venueCreated ?? "No creation date"}
        </p>
      </section>
    </section>
  );
}
