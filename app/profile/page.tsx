import UpcomingStays from "../_components/grids/UpcomingStays";
import ProfileCard from "../_components/ui/ProfileCard";

export default function Profile() {
  return (
    <div className="mt-12 mb-24 px-6 md:px-10 lg:px-16">
      <h1 className="sr-only">Profile</h1>
      <ProfileCard />
      {/* Upcoming stays section */}
      <section className="my-24">
        <div className="mb-10">
          <span className="label-text text-ocean-700">Booked venues</span>
          <h2>Upcoming stays</h2>
        </div>
        <UpcomingStays />
      </section>
    </div>
  );
}
