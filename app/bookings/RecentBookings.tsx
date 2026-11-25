"use client";
import Image from "next/image";
import Link from "next/link";
import Tag from "../_components/ui/Tags";
import { BookingsResponseData, VenuesResponse } from "@/app/_lib/types";
import { getVenuesByProfile } from "../_lib/api";
import { useAuth } from "../_lib/stores";
import { useQuery } from "@tanstack/react-query";
import { formatVenueDate } from "../_lib/utils";

export default function RecentBookings() {
  const { data: authData } = useAuth();
  const { isPending, isError, error, data } = useQuery<VenuesResponse>({
    queryKey: ["profileVenues"],
    queryFn: () =>
      getVenuesByProfile(authData?.name || "", authData?.accessToken || ""),
  });

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 86400000);

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data: {error?.message}</p>;
  }

  // Get recent bookings before tomorrow
  const recentBookingsArray: BookingsResponseData[] = [
    ...data?.data.flatMap((venue) => {
      return venue.bookings
        ?.filter((booking) => new Date(booking.dateFrom) < tomorrow)
        .sort(function (a: BookingsResponseData, b: BookingsResponseData) {
          return (
            new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime()
          );
        });
    }),
  ];

  // Helper function to get the venue for a given booking
  function getBookingVenue(bookingId: string) {
    return data?.data.filter((venue) =>
      venue.bookings?.some((booking) => booking.id === bookingId),
    )[0];
  }

  return (
    <div className="flex flex-col h-fit gap-8 p-6 bg-cloud-white-50 rounded-2xl">
      <div className="flex flex-col gap-1">
        <h3>Recent stays</h3>
        <p>Guests who have stayed at your venues.</p>
      </div>
      <ul className="flex flex-col divide-y divide-cloud-white-600 [&>li]:py-4 [&>li:first-child]:pt-0 [&>li:last-child]:pb-0">
        {recentBookingsArray.length > 0 ? (
          recentBookingsArray.map((booking, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={
                    booking.customer.avatar.url || "/images/users/customer.jpg"
                  }
                  alt={booking.customer.avatar.alt || "Customer"}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center w-full">
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">
                      {booking.customer.name}
                    </p>
                    <Tag variant="extraSmall" color="primary">
                      {formatVenueDate(booking.dateFrom)} -{" "}
                      {formatVenueDate(booking.dateTo)}
                    </Tag>
                  </div>
                  <p>
                    {getBookingVenue(booking.id)?.name ?? ""}・{booking.guests}{" "}
                    guests
                  </p>
                </div>
                <Link href="/coming-soon" className="link-text">
                  View booking
                </Link>
              </div>
            </li>
          ))
        ) : (
          <li className="mx-auto">
            <p className="text-stone-500">No recent bookings found.</p>
          </li>
        )}
      </ul>
    </div>
  );
}
