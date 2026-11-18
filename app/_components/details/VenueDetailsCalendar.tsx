import { VenueResponseData } from "@/app/_lib/types";

export function VenueDetailsCalendar({
  venueData,
}: {
  venueData?: VenueResponseData;
}) {
  return (
    <aside className="sticky top-10 self-start col-span-4 flex flex-col gap-6 p-6 h-56 bg-cloud-white-50 rounded-2xl">
      <h2>Booking calendar</h2>
      <p>Select your desired dates to check availability and make a booking.</p>
    </aside>
  );
}
