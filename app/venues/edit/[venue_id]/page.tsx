import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function EditVenue() {
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
    </section>
  );
}
