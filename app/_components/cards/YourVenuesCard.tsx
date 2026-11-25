"use client";
import { VenueResponseData } from "@/app/_lib/types";
import Link from "next/link";
import Image from "next/image";
import Tag from "../ui/Tags";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";

// Product card component
export default function YourVenuesCard({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  const venueMeta = venueData.meta || {};
  const venueMetaTagsMap = Object.entries(venueMeta).filter(
    ([key, value]) => value === true,
  );
  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col gap-4">
      {/* Image */}
      <Link
        href={`/venues/${venueData.id}`}
        className="relative w-full h-64 md:h-50"
      >
        <Tag
          variant="medium"
          color="primary"
          className="absolute top-3 left-3 z-1"
        >
          <Sparkles size={16} strokeWidth={1.5} />
          {(venueData.rating ?? 0).toFixed(1)}
        </Tag>
        <Image
          src={venueData.media?.[0]?.url || "/images/placeholder.png"}
          alt={venueData.media?.[0]?.alt || "Venue"}
          fill
          loading="eager"
          sizes="33vw, 100vw"
          className="object-cover rounded-lg"
        />
      </Link>
      {/* Venue details */}
      <div>
        <div className="mb-4">
          <span className="label-text-lowercase text-ocean-700">
            {venueData.location?.city}・{venueData.location?.country}
          </span>
          <h3>{venueData.name}</h3>
          <p>Up to {venueData.maxGuests} guests</p>
        </div>
        <div className="flex gap-2">
          {venueMetaTagsMap.length > 0 ? (
            venueMetaTagsMap.map(([key]) => (
              <Tag key={key} variant="small" color="border">
                {key}
              </Tag>
            ))
          ) : (
            <Tag variant="small" color="border">
              No amenities
            </Tag>
          )}
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center gap-2">
        <p className="price-text">NOK {venueData.price}</p>
        <p className="small-text text-stone-700">/ night</p>
      </div>
      {/* Card action buttons */}
      <div className="flex gap-3 pt-3 border-t border-cloud-white-600">
        <Button
          variant="small"
          color="borderPrimary"
          width="full"
          href={`/venues/edit/${venueData.id}`}
        >
          Edit
        </Button>
        <Button
          variant="small"
          color="primary"
          width="full"
          href={`/venues/${venueData.id}`}
        >
          View
        </Button>
      </div>
    </div>
  );
}
