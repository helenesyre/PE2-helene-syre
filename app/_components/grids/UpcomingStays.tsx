"use client";
import { useAuth } from "@/app/_lib/stores";
import BookingCard from "../cards/BookingCard";
import { useQuery } from "@tanstack/react-query";
import { getBookingsByProfile } from "@/app/_lib/api";

export default function UpcomingStays() {
  const { data: authData } = useAuth();

  const {
    isPending,
    error,
    data: bookingsData,
    refetch,
  } = useQuery({
    queryKey: ["bookings", authData?.name],
    queryFn: () =>
      getBookingsByProfile(authData?.name || "", authData?.accessToken || ""),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading bookings</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
      {bookingsData?.data.filter(
        (booking) => booking.dateFrom >= new Date().toISOString(),
      ).length > 0 ? (
        bookingsData.data
          .filter((booking) => booking.dateFrom >= new Date().toISOString())
          .map((booking, key) => (
            <BookingCard key={key} booking={booking} refetch={refetch} />
          ))
      ) : (
        <p className="col-span-full text-center text-stone-500 mb-10">
          No venues found.
        </p>
      )}
    </div>
  );
}
