import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Users } from "lucide-react";
import { Sparkles } from "lucide-react";
import Tag from "../ui/Tags";
import Button from "../ui/Button";

// Product card component
export default function BookingCard() {
  return (
    <div className="p-3 bg-cloud-white-50 rounded-lg flex flex-col xl:flex-row gap-4">
      {/* Image */}
      <Link
        href="/venues/1"
        className="relative w-full xl:w-64 2xl:w-80 h-64 md:h-50 xl:h-full shrink-0"
      >
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
      <div className="w-full">
        {/* Venue details */}
        <div>
          <div>
            <span className="label-text-lowercase text-ocean-700">
              City・Country
            </span>
            <h3>Venue Name</h3>
          </div>
          <div className="flex flex-col gap-2 my-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={24} strokeWidth={1.5} className="shrink-0" />
              <p>13.nov 2026 - 25. nov 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <Users size={24} strokeWidth={1.5} className="shrink-0" />
              <p>2 guests</p>
            </div>
          </div>
        </div>
        {/* Price and view button */}
        <div className="flex items-center justify-between pt-3 border-t border-cloud-white-600">
          <div className="flex items-center gap-2">
            <p className="price-text">NOK 2450</p>
            <p className="small-text text-stone-700">/ night</p>
          </div>
          <Button variant="small" color="primary" href={"/venues/1"}>
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
