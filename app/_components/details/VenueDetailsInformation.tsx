import { VenueResponseData } from "@/app/_lib/types";
import {
  EggFried,
  PawPrint,
  Sparkles,
  SquareLetterP,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Tag from "../ui/Tags";

export function VenueDetailsInformation({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  return (
    <article className="flex flex-col gap-10 flex-1">
      {/* Venue information */}
      <section className="flex flex-col gap-4">
        <h1>{venueData.name}</h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-2 justify-between">
          <div className="flex items-center gap-4">
            <span className="lead-text text-ocean-700">
              {venueData.maxGuests} guests・{venueData.location.city},{" "}
              {venueData.location.country}
            </span>
            <Tag variant="medium" color="primary">
              <Sparkles size={16} strokeWidth={1.5} />
              {(venueData.rating ?? 0).toFixed(1)}
            </Tag>
          </div>
          <div className="flex items-center gap-2">
            <p className="single-venue-price-text">
              NOK {venueData.price ?? 0}
            </p>
            <p className="small-text text-stone-700">/ night</p>
          </div>
        </div>
      </section>
      {/* Venue Manager information */}
      <section>
        <div className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src={venueData.owner.avatar.url ?? "/images/users/avatar.jpg"}
              alt={venueData.owner.avatar.alt ?? "User avatar"}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold">
              {venueData.owner.name ?? "No name"}
            </p>
            <p>{venueData.owner.email ?? "No email"}</p>
          </div>
        </div>
      </section>
      <hr className="border border-cloud-white-600" />
      {/* Description */}
      <section className="flex flex-col gap-4">
        <h2>Description:</h2>
        <p>{venueData.description ?? "No description available"}</p>
      </section>
      {/* What the place offers */}
      <section className="flex flex-col gap-4">
        <h2>What the place offers:</h2>
        <ul className="list-none flex flex-col gap-3">
          {venueData.meta.wifi && (
            <li className="flex items-center gap-2">
              <Wifi size={20} strokeWidth={1.5} /> Wi-Fi
            </li>
          )}
          {venueData.meta.breakfast && (
            <li className="flex items-center gap-2">
              <EggFried size={20} strokeWidth={1.5} /> Breakfast
            </li>
          )}
          {venueData.meta.pets && (
            <li className="flex items-center gap-2">
              <PawPrint size={20} strokeWidth={1.5} /> Pets
            </li>
          )}
          {venueData.meta.parking && (
            <li className="flex items-center gap-2">
              <SquareLetterP size={20} strokeWidth={1.5} /> Parking
            </li>
          )}
          {!(
            venueData.meta.breakfast ||
            venueData.meta.parking ||
            venueData.meta.pets ||
            venueData.meta.wifi
          ) && <p>No amenities</p>}
        </ul>
      </section>
      {/* Location */}
      <section className="flex flex-col gap-4">
        <h2>Location:</h2>
        <p>
          {venueData.location.address ?? "No address"},{" "}
          {venueData.location.city ?? "No city"},{" "}
          {venueData.location.zip ?? "No zip"},{" "}
          {venueData.location.country ?? "No country"}
        </p>
      </section>
    </article>
  );
}
