import YourVenuesCard from "../cards/YourVenuesCard";

export default function YourVenuesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <YourVenuesCard />
      <YourVenuesCard />
      <YourVenuesCard />
    </div>
  );
}
