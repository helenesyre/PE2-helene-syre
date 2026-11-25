import YourVenuesGrid from "../_components/grids/YourVenuesGrid";
import ManagerVenueStats from "../_components/grids/ManagerVenueStats";
import UpcomingBookings from "./UpcomingBookings";
import RecentBookings from "./RecentBookings";
import { CirclePlus } from "lucide-react";
import Button from "../_components/ui/Button";
import { Suspense } from "react";

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
      <ManagerVenueStats />
      {/* Your venues */}
      <section className="mb-10 lg:mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-10">
          <div>
            <span className="label-text text-ocean-700">Overview</span>
            <h2>Your venues</h2>
          </div>
          <p className="md:max-w-md lg:max-w-sm xl:max-w-md text-left lg:text-right">
            Every venue you&#39;ve created in one place.
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
          <Suspense>
            <UpcomingBookings />
          </Suspense>
          <Suspense>
            <RecentBookings />
          </Suspense>
        </div>
      </section>
    </section>
  );
}
