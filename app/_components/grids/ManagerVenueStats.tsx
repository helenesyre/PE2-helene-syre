"use client";
import { getVenuesByProfile } from "@/app/_lib/api";
import { useQuery } from "@tanstack/react-query";
import { CalendarCheck, CalendarClock, MapPinned } from "lucide-react";
import type { BookingsResponseData, VenuesResponse } from "@/app/_lib/types";
import { useAuth } from "@/app/_lib/stores";
import { formatVenueDate } from "@/app/_lib/utils";

export default function ManagerVenueStats() {
  const { data: authData } = useAuth();
  const { isPending, isError, error, data } = useQuery<VenuesResponse>({
    queryKey: ["profileVenues"],
    queryFn: () =>
      getVenuesByProfile(authData?.name || "", authData?.accessToken || ""),
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data: {error?.message}</p>;
  }

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);

  // Upcoming bookings count
  const upcomingBookings = data?.data.reduce((count, venue) => {
    return (
      count +
      (venue.bookings?.filter(
        (booking) => new Date(booking.dateFrom) >= tomorrow,
      ).length || 0)
    );
  }, 0);

  // Next check-in
  const upcomingBookingsArray: BookingsResponseData[] = [
    ...data?.data.flatMap((venue) => {
      return venue.bookings
        ?.filter((booking) => new Date(booking.dateFrom) >= tomorrow)
        .sort(function (a: BookingsResponseData, b: BookingsResponseData) {
          return (
            new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime()
          );
        });
    }),
  ];

  const nextCheckIn = upcomingBookingsArray[0];
  const nextCheckInVenue = data.data.filter((venue) =>
    venue.bookings?.some((booking) => booking.id === nextCheckIn?.id),
  )[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 lg:mb-12">
      {/* Active venues */}
      <div className="flex flex-col gap-6 p-6 bg-cloud-white-50 rounded-2xl">
        <div className="w-fit h-fit p-3 bg-seafoam-100 text-ocean-500 rounded-xl">
          <MapPinned size={32} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Active venues</p>
          <p className="manage-venue-number">{data?.meta.totalCount || 0}</p>
        </div>
      </div>
      {/* Upcoming bookings */}
      <div className="flex flex-col gap-6 p-6 bg-cloud-white-50 rounded-2xl">
        <div className="w-fit h-fit p-3 bg-seafoam-100 text-ocean-500 rounded-xl">
          <CalendarClock size={32} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Upcoming bookings</p>
          <p className="manage-venue-number">{upcomingBookings || 0}</p>
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
            <p className="manage-venue-number">
              {nextCheckIn?.dateFrom
                ? formatVenueDate(nextCheckIn?.dateFrom)
                : "No bookings"}
            </p>
          </div>
          <p>
            {nextCheckIn
              ? `${nextCheckInVenue?.name} ・ ${nextCheckIn?.customer?.name}`
              : "No check-in"}
          </p>
        </div>
      </div>
    </div>
  );
}
