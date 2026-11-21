import Link from "next/link";
import Image from "next/image";
import Tag from "../ui/Tags";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";

// Product card component
export default function YourVenuesCard() {
  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col gap-4">
      {/* Image */}
      <Link href="/venues/1" className="relative w-full h-64 md:h-50">
        <Tag
          variant="medium"
          color="primary"
          className="absolute top-3 left-3 z-1"
        >
          <Sparkles size={16} strokeWidth={1.5} />
          4.6
        </Tag>
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
          <Tag variant="small" color="border">
            Tag 1
          </Tag>
          <Tag variant="small" color="border">
            Tag 2
          </Tag>
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center gap-2">
        <p className="price-text">NOK 2450</p>
        <p className="small-text text-stone-700">/ night</p>
      </div>
      {/* Card action buttons */}
      <div className="flex gap-3 pt-3 border-t border-cloud-white-600">
        <Button
          variant="small"
          color="borderPrimary"
          width="full"
          href={`/venues/edit/1`}
        >
          Edit
        </Button>
        <Button variant="small" color="primary" width="full" href={`/venues/1`}>
          View
        </Button>
      </div>
    </div>
  );
}
