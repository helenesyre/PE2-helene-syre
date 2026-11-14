import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UpcomingStays from "../_components/grids/UpcomingStays";

export default function Profile() {
  return (
    <div className="mt-12 mb-24 px-6 md:px-10 lg:px-16">
      <h1 className="sr-only">Profile</h1>
      <section className="rounded-2xl overflow-hidden">
        {/* Banner image */}
        <div className="relative w-full h-44 md:h-60 lg:h-72 overflow-hidden transition-all duration-300">
          <Image
            src="/images/users/banner.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        {/* User details */}
        <div className="flex flex-col 2xl:flex-row justify-between px-8 py-10 bg-cloud-white-50 gap-8 2xl:gap-20">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative aspect-square w-28 h-28 rounded-full overflow-hidden">
              <Image
                src="/images/users/avatar.jpg"
                alt="..."
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 max-w-xl">
              <div>
                <span className="text-base font-semibold bg-lime-100 border border-lime-500 text-fern-600 px-4 py-1 rounded-lg">
                  Manager
                </span>
                <h2 className="mt-2 mb-1">Manager</h2>
                <p>manager@stud.noroff.no</p>
              </div>
              <p className="text-deep-forest-400">
                Ac duis vitae faucibus pellentesque. Pulvinar mollis risus nisl
                hac orci urna sollicitudin.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 h-fit">
            <Link
              href="/venues"
              className="flex justify-center items-center gap-2 bg-ocean-500 text-cloud-white-500 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-700 transition-colors duration-300"
            >
              <LayoutDashboard size={20} strokeWidth={1.5} />
              Manage venues
            </Link>
            <Link
              href="/venues"
              className="flex justify-center gap-2 border border-ocean-700 text-ocean-700 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-50 transition-colors duration-300"
            >
              Edit profile
            </Link>
            <Link
              href="/venues"
              className="flex justify-center gap-2 border border-ocean-700 text-ocean-700 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-50 transition-colors duration-300"
            >
              Log out
            </Link>
          </div>
        </div>
      </section>
      {/* Upcoming stays section */}
      <section className="my-24">
        <div className="mb-10">
          <span className="label-text text-ocean-700">Booked venues</span>
          <h2>Upcoming stays</h2>
        </div>
        <UpcomingStays />
      </section>
    </div>
  );
}
