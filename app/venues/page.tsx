import { Search } from "lucide-react";
import VenuesGrid from "../_components/grids/VenuesGrid";

export default function Venues() {
  return (
    <div className="mt-12 mb-24 px-6 md:px-10 lg:px-16">
      <h1>Venues</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mt-8">
        {/* Search */}
        <div className="w-full md:max-w-2xl flex flex-col gap-2">
          <form className="flex items-center justify-between py-4 px-6 bg-cloud-white-50 border border-cloud-white-600 rounded-4xl shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Search for venues..."
              />
            </div>
            <button
              type="submit"
              className="w-fit text-deep-forest-300 cursor-pointer hover:text-deep-forest-500 transition-all duration-300"
            >
              <Search size={20} strokeWidth={2} className="shrink-0" />
            </button>
          </form>

          {/* Results count mobile */}
          <p className="md:hidden">
            <span className="font-semibold">1000</span> venues found
          </p>
        </div>

        {/* Dropdown filter */}
        <div className="mb-12 md:mb-0 w-full md:w-fit">
          <select className="w-full md:w-fit bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Newest</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
            <option>Best rating</option>
          </select>
        </div>
      </div>

      {/* Results count desktop */}
      <p className="hidden md:block mb-0 md:mb-12 mt-0 md:mt-8">
        <span className="font-semibold">1000</span> venues found
      </p>

      {/* Venues grid */}
      <VenuesGrid />

      {/* Load more button */}
      <div className="flex justify-center mt-12 md:mt-24">
        <button className="bg-deep-forest-500 text-cloud-white-500 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-deep-forest-400 transition-colors duration-300">
          Load more venues
        </button>
      </div>
    </div>
  );
}
