"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import EditVenueForm from "@/app/_components/forms/EditVenueForm";
import { useParams } from "next/navigation";
import { SingleVenueResponse } from "@/app/_lib/types";
import { getVenueById } from "@/app/_lib/api";
import { useQuery } from "@tanstack/react-query";

export default function EditVenue() {
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

  return (
    <section className="mt-12 mb-24 px-6 md:px-10 lg:px-16 xl:px-40">
      <div className="flex flex-col gap-2 mb-18">
        <Link
          href="/bookings"
          className="flex items-center gap-1 w-fit text-fern-700 hover:text-ocean-500 hover:-translate-x-1.5 transition-all duration-400"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
          <span className="font-medium">Back to bookings</span>
        </Link>
        <h1>Edit venue</h1>
        <p className="lead-text text-deep-forest-400">
          Update your venue details, images, and description. Changes will show
          in the preview.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <article className="flex-4">
          <EditVenueForm venueData={venueData.data} />
        </article>
        {/* Profile preview */}
        <aside className="flex-3 mb-0 lg:mb-8">
          <figure className="sticky top-10 self-start">
            <div className="flex flex-col p-6 bg-cloud-white-50 gap-8 rounded-2xl overflow-hidden">
              <h2>Venue preview</h2>
              <p>
                Preview of your venue will appear here as you fill out the form.
              </p>
            </div>
            <figcaption className="text-center small-text text-deep-forest-400 mt-4">
              Updates as you edit the form.
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>
  );
}
