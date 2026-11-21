import Button from "@/app/_components/ui/Button";

export default function EditVenueForm() {
  return (
    <form className="flex flex-col gap-8 w-full">
      {/* Venue details */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Venue details</h2>
          <p className="text-deep-forest-400">
            Enter the details of your venue.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* Venue name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="venue-name" className="ml-4">
              Venue name
            </label>
            <input
              type="text"
              id="venue-name"
              name="venueName"
              placeholder="Enter the venue name"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="ml-4">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="What makes your venue special? Mention the rooms, the view and what's nearby."
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              rows={4}
            ></textarea>
            {/* Word counter */}
            <p className="text-right">0 / 160 words</p>
          </div>
        </div>
      </section>
      {/* Venue images */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Venue images</h2>
          <p className="text-deep-forest-400">
            Add 1-5 images. The first one is your cover image. Use a public
            image URL.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
          {/* Image URL */}
          <div className="flex flex-col flex-1 gap-2 w-full">
            <label htmlFor="image-url" className="ml-4">
              Image URL
            </label>
            <input
              type="text"
              id="image-url"
              name="imageUrl"
              placeholder="https://..."
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Image alt */}
          <div className="flex flex-col flex-1 gap-2 w-full">
            <label htmlFor="image-alt" className="ml-4">
              Image alt text
            </label>
            <input
              type="text"
              id="image-alt"
              name="imageAlt"
              placeholder="e.g. Villa by the lake"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          <Button variant="small" color="secondary" className="my-3">
            Add
          </Button>
        </div>
        <p>Images added will appear here.</p>
      </section>
      {/* Price & capacity */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Price & capacity</h2>
          <p className="text-deep-forest-400">
            Set your nightly costs and how many guests you can host.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
          {/* Price per night (NOK) */}
          <div className="flex flex-col flex-1 gap-2 w-full">
            <label htmlFor="price" className="ml-4">
              Price per night (NOK)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="e.g. 1500"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Maximum guests */}
          <div className="flex flex-col flex-1 gap-2 w-full">
            <label htmlFor="max-guests" className="ml-4">
              Maximum guests
            </label>
            <input
              type="number"
              id="max-guests"
              name="maxGuests"
              placeholder="e.g. 4"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>
      {/* Facilities */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Facilities</h2>
          <p className="text-deep-forest-400">
            Select everything your venue offers.
          </p>
        </div>
        {/* Facilities checkboxes */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 p-6 w-full md:w-fit bg-cloud-white-50 rounded-2xl">
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" name="facilities" value="wifi" />
            Wifi
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" name="facilities" value="parking" />
            Parking
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" name="facilities" value="breakfast" />
            Breakfast
          </label>
          <label className="flex items-center gap-2 p-4 rounded-full border border-cloud-white-600 cursor-pointer has-checked:bg-ocean-100 has-checked:border-ocean-500">
            <input type="checkbox" name="facilities" value="pets" />
            Pets allowed
          </label>
        </div>
      </section>
      {/* Location */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2>Location</h2>
            <p className="text-deep-forest-400">
              Guests will see the city and country on the card. The full address
              is shared in the venue details page.
            </p>
          </div>
          {/* Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="ml-4">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street and number"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* City and ZIP Code */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
            {/* City */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="city" className="ml-4">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="e.g. Oslo"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* ZIP code */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="zip-code" className="ml-4">
                ZIP code
              </label>
              <input
                type="text"
                id="zip-code"
                name="zipCode"
                placeholder="e.g. 5555"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
          {/* Country and Continent */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
            {/* Country */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="country" className="ml-4">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="e.g. Norway"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* Continent */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="continent" className="ml-4">
                Continent
              </label>
              <input
                type="text"
                id="continent"
                name="continent"
                placeholder="e.g. Europe"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>Map</h3>
            <p className="text-deep-forest-400">
              If you want a map of the location to show, fill in the latitude
              and longitude. These are optional to add, but no map will show if
              not added.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-end">
            {/* Latitude */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="map-latitude" className="ml-4">
                Latitude
              </label>
              <input
                type="number"
                id="map-latitude"
                name="latitude"
                placeholder="e.g. 59.9139"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            {/* Longitude */}
            <div className="flex flex-col flex-1 gap-2 w-full">
              <label htmlFor="map-longitude" className="ml-4">
                Longitude
              </label>
              <input
                type="number"
                id="map-longitude"
                name="longitude"
                placeholder="e.g. 10.7522"
                className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Form actions */}
      <div className="flex justify-center gap-4">
        <Button variant="medium" color="ghost" href="/bookings">
          Cancel
        </Button>
        <Button variant="medium" color="primary" type="submit">
          Save changes
        </Button>
      </div>
    </form>
  );
}
