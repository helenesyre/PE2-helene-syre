import { VenueResponseData } from "@/app/_lib/types";
import {
  EggFried,
  PawPrint,
  Sparkles,
  SquareLetterP,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export function VenueDetailsInformation({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  return (
    <article className="col-span-8 flex flex-col gap-10">
      {/* Venue information */}
      <section className="flex flex-col gap-4">
        <h1>{venueData.name}</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex items-center gap-4">
            <span className="lead-text text-ocean-700">
              8 guests・Lake Como, Italy
            </span>
            <span className="flex items-center gap-1 py-1 px-3 small-text font-semibold bg-seafoam-50 border border-seafoam-200 text-ocean-500 rounded-lg">
              <Sparkles size={16} strokeWidth={1.5} />
              5.0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="single-venue-price-text">NOK 2450</p>
            <p className="small-text text-stone-700">/ night</p>
          </div>
        </div>
      </section>
      {/* Venue Manager information */}
      <section>
        <div className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden">
            <Image
              src="/images/users/avatar.jpg"
              alt="..."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold">Manager</p>
            <p>manager@stud.noroff.no</p>
          </div>
        </div>
      </section>
      <hr className="border border-cloud-white-600" />
      {/* Description */}
      <section className="flex flex-col gap-4">
        <h2>Description:</h2>
        <p>
          This is a beautiful venue located in Lake Como, Italy. It offers a
          comfortable stay for up to 8 guests with stunning views and modern
          amenities.
        </p>
      </section>
      {/* What the place offers */}
      <section className="flex flex-col gap-4">
        <h2>What the place offers:</h2>
        <ul className="list-none flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <Wifi size={20} strokeWidth={1.5} /> Wi-Fi
          </li>
          <li className="flex items-center gap-2">
            <EggFried size={20} strokeWidth={1.5} /> Breakfast
          </li>
          <li className="flex items-center gap-2">
            <PawPrint size={20} strokeWidth={1.5} /> Pets
          </li>
          <li className="flex items-center gap-2">
            <SquareLetterP size={20} strokeWidth={1.5} /> Parking
          </li>
        </ul>
      </section>
      {/* Location */}
      <section className="flex flex-col gap-4">
        <h2>Location:</h2>
        <p>22016 Tremezzina, Province of Como, Italia</p>
      </section>
    </article>
  );
}
