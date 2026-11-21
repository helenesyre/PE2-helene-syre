"use client";

import Link from "next/link";
import Image from "next/image";
import { VenueResponseData } from "@/app/_lib/types";
import Tag from "../ui/Tags";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";

// Product card component
export default function VenueCard({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col gap-4">
      {/* Image */}
      <Link
        href={`/venues/${venueData?.id}`}
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
          <h3 className="line-clamp-2">{venueData.name}</h3>
          <p>Up to {venueData.maxGuests} guests</p>
        </div>
        <div className="flex gap-2">
          <Tag variant="small" color="border">
            Tag 1
          </Tag>
          <Tag variant="small" color="border">
            Tag 2
          </Tag>
        </div>
      </div>
      {/* Price and view button */}
      <div className="flex items-center justify-between pt-3 border-t border-cloud-white-600">
        <div className="flex items-center gap-2">
          <p className="price-text">NOK {venueData.price}</p>
          <p className="small-text text-stone-700">/ night</p>
        </div>
        <Button
          variant="small"
          color="primary"
          href={`/venues/${venueData.id}`}
        >
          View
        </Button>
      </div>
    </div>
  );
}
