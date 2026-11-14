import BookingCard from "../venues/BookingCard";

export default function UpcomingStays() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </div>
  );
}
