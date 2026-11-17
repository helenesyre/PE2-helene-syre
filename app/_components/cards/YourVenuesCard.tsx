import Link from "next/link";
import Image from "next/image";

// Product card component
export default function YourVenuesCard() {
  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col gap-4">
      {/* Image */}
      <Link href="/venues/1" className="relative w-full h-64 md:h-50">
        <Image
          src="/images/placeholder.png"
          alt="Venue"
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
            City・Country
          </span>
          <h3>Venue Name</h3>
          <p>Up to - guests</p>
        </div>
        <div className="flex gap-2">
          <span className="tag-text px-2 py-1 border border-deep-forest-500 rounded-lg">
            Tag 1
          </span>
          <span className="tag-text px-2 py-1 border border-deep-forest-500 rounded-lg">
            Tag 2
          </span>
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center gap-2">
        <p className="price-text">NOK 2450</p>
        <p className="small-text text-stone-700">/ night</p>
      </div>
      {/* Card action buttons */}
      <div className="flex gap-3 pt-3 border-t border-cloud-white-600">
        <Link
          href={"/venues/edit/1"}
          className="flex justify-center button-text w-full px-4 py-1.5 rounded-full cursor-pointer border border-ocean-700 text-ocean-700 button-text hover:bg-ocean-50 duration-300hover:shadow-md transition-all duration-300"
        >
          Edit
        </Link>
        <Link
          href={"/venues/1"}
          className="flex justify-center button-text w-full px-4 py-1.5 rounded-full cursor-pointer bg-ocean-500 text-cloud-white-500 hover:bg-ocean-700 hover:shadow-md transition-all duration-300"
        >
          View
        </Link>
      </div>
    </div>
  );
}
