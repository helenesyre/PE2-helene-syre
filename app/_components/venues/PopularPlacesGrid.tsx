import VenueCard from "./VenueCard";

export default function PopularPlacesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <VenueCard />
      <VenueCard />
      <VenueCard />
      <VenueCard />
    </div>
  );
}
