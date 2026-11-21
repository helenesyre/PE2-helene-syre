import YourVenuesGrid from "../_components/grids/YourVenuesGrid";
import UpcomingBookings from "./UpcomingBookings";
import RecentBookings from "./RecentBookings";
import {
  MapPinned,
  CirclePlus,
  CalendarClock,
  CalendarCheck,
} from "lucide-react";
import Button from "../_components/ui/Button";

export default function Bookings() {
  return (
    <section className="mt-12 mb-24 px-6 md:px-10 lg:px-16">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <span className="label-text text-ocean-700">Host dashboard</span>
          <h1>Manage your venues</h1>
          <p className="lead-text text-deep-forest-400">
            Create new venues, update listings and see who&#39;s coming.
          </p>
        </div>
        <Button
          variant="large"
          color="primary"
          href="/venues/create"
          className="w-full md:w-fit"
        >
          <CirclePlus size={24} strokeWidth={2} />
          Create venue
        </Button>
      </div>

      {/* Active venues, Upcoming bookings, Next check-in */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 lg:mb-12">
        {/* Active venues */}
        <div className="flex flex-col gap-6 p-6 bg-cloud-white-50 rounded-2xl">
          <div className="w-fit h-fit p-3 bg-seafoam-100 text-ocean-500 rounded-xl">
            <MapPinned size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-2">
            <p>Active venues</p>
            <p className="manage-venue-number">3</p>
          </div>
        </div>
        {/* Upcoming bookings */}
        <div className="flex flex-col gap-6 p-6 bg-cloud-white-50 rounded-2xl">
          <div className="w-fit h-fit p-3 bg-seafoam-100 text-ocean-500 rounded-xl">
            <CalendarClock size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-2">
            <p>Upcoming bookings</p>
            <p className="manage-venue-number">5</p>
          </div>
        </div>
        {/* Next check-in */}
        <div className="flex flex-col gap-6 p-6 bg-cloud-white-50 rounded-2xl">
          <div className="w-fit h-fit p-3 bg-seafoam-100 text-ocean-500 rounded-xl">
            <CalendarCheck size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p>Next check-in</p>
              <p className="manage-venue-number">13. Nov 2026</p>
            </div>
            <p>Venue name・Guest</p>
          </div>
        </div>
      </div>
      {/* Your venues */}
      <section className="mb-10 lg:mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-10">
          <div>
            <span className="label-text text-ocean-700">Overview</span>
            <h2>Your venues</h2>
          </div>
          <p className="md:max-w-md lg:max-w-sm xl:max-w-md text-left lg:text-right">
            Every venue you’ve created in one place.
          </p>
        </div>
        <YourVenuesGrid />
      </section>
      {/* Bookings */}
      <section>
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-10">
          <div>
            <span className="label-text text-ocean-700">Guests</span>
            <h2>Bookings</h2>
          </div>
          <p className="md:max-w-md lg:max-w-sm xl:max-w-md text-left lg:text-right">
            See who&#39;s coming and who has stayed recently.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingBookings />
          <RecentBookings />
        </div>
      </section>
    </section>
  );
}
