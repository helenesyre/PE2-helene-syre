import { Building, MapPinned, Search } from "lucide-react";
import Image from "next/image";
import DestinationGrid from "./_components/grids/DestinationGrid";
import PopularPlacesGrid from "./_components/grids/PopularPlacesGrid";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 z-0 relative">
      {/* Hero image */}
      <section className="relative h-205 p-6 md:p-12">
        {/* Hero image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Hero title and description */}
        <div className="absolute inset-0 flex flex-col gap-2 justify-center items-center text-center px-12 ">
          <h1 className="relative text-cloud-white-500">Find your next stay</h1>
          <p className="relative lead-text text-stone-300">
            From city flats to cabins by the fjord, book it in minutes.
          </p>
        </div>
      </section>
      {/* Tourism section */}
      <section className="mt-24 px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-10">
          <div>
            <span className="label-text text-ocean-700">Best locations</span>
            <h2>Tourism around the world</h2>
          </div>
          <p className="md:max-w-md lg:max-w-sm xl:max-w-md text-left lg:text-right">
            Extraordinary natural beauty, enjoy the rich culture, and experience
            the friendliness of the local people.
          </p>
        </div>
        <DestinationGrid />
      </section>
      {/* How it works section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-31.5 px-6 md:px-10 lg:px-16">
        {/* Image */}
        <div className="relative w-full aspect-4/3 lg:aspect-9/10 md:h-full md:min-h-120 rounded-2xl overflow-hidden">
          <Image
            src="/images/how-it-works.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {/* Steps */}
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-2">
            <span className="label-text text-ocean-700">How it works</span>
            <h2>Your stay in three easy steps</h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* Step 1 */}
            <div className="flex gap-6 p-6 md:p-8 bg-cloud-white-50 rounded-2xl">
              <div className="w-fit h-fit p-3 bg-ocean-100 text-ocean-500 rounded-xl">
                <Search size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3>Find your destination</h3>
                <p>
                  Search by place or venue name and browse stays from cozy
                  cabins to beach resorts. Filter by guests and amenities to
                  find the right fit.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-6 p-6 md:p-8">
              <div className="w-fit h-fit p-3 bg-cloud-white-600 text-cloud-white-900 rounded-xl">
                <Building size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3>Book a venue</h3>
                <p>
                  Pick your dates in the calendar, see what&#39;s available, and
                  confirm your booking in just a few clicks. No hidden fees.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-6 p-6 md:p-8">
              <div className="w-fit h-fit p-3 bg-cloud-white-600 text-cloud-white-900 rounded-xl">
                <MapPinned size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3>Explore your destination</h3>
                <p>
                  Pack your bags and enjoy your stay. You&#39;ll find every
                  upcoming booking in your profile, so your plans are always one
                  tap away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular places section */}
      <section className="mb-24 px-6 md:px-10 lg:px-16">
        <div className="mb-10">
          <span className="label-text text-ocean-700">Popular places</span>
          <h2>Find your next venue today</h2>
        </div>
        <PopularPlacesGrid />
      </section>
    </div>
  );
}
