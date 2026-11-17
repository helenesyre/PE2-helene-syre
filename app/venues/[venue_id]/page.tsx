import VenuePolicies from "@/app/_components/grids/VenuePolicies";
import {
  EggFried,
  PawPrint,
  Sparkles,
  SquareLetterP,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export default function VenueDetails() {
  return (
    <div className="mt-6 md:mt-10 xl:mt-12 mb-24 px-6 md:px-10 lg:px-16 xl:px-40">
      {/* Image Gallery */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src="/images/venue-detail/venue-cover.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-6 h-96">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/venue-detail/venue-2.jpg"
              alt="..."
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/venue-detail/venue-3.jpg"
              alt="..."
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/venue-detail/venue-4.jpg"
              alt="..."
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/venue-detail/venue-5.jpg"
              alt="..."
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mt-12 grid gap-20 lg:grid-cols-12">
        <article className="col-span-8 flex flex-col gap-10">
          {/* Venue information */}
          <section className="flex flex-col gap-4">
            <h1>Venue name</h1>
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
        {/* Booking calendar - placeholder for future implementation */}
        <aside className="sticky top-10 self-start col-span-4 flex flex-col gap-6 p-6 h-56 bg-cloud-white-50 rounded-2xl">
          <h2>Booking calendar</h2>
          <p>
            Select your desired dates to check availability and make a booking.
          </p>
        </aside>
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
          Last changed: 2.11.2026 at 13:43 ・ Created: 1.11.2026 at 10:58
        </p>
      </section>
    </div>
  );
}
