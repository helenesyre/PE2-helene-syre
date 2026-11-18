import VenueDetails from "@/app/_components/details/VenueDetails";
import { Suspense } from "react";

export default function VenueDetailsPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VenueDetails />
    </Suspense>
  );
}
