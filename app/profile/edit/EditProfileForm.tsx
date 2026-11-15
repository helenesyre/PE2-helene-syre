import Link from "next/link";

export default function EditProfileForm() {
  return (
    <form className="flex flex-col gap-8 w-full">
      {/* Profile picture */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Profile picture</h2>
          <p className="text-deep-forest-400">Use a public image URL.</p>
        </div>
        <div className="flex flex-col gap-2">
          {/* URL */}
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="avatar-url" className="ml-4">
              Avatar image URL
            </label>
            <input
              type="url"
              id="avatar-url"
              name="avatarUrl"
              placeholder="Add a public image URL"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Alt */}
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="avatar-alt" className="ml-4">
              Avatar alt text
            </label>
            <input
              type="text"
              id="avatar-alt"
              name="avatarAlt"
              placeholder="A short description of the image"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>
      {/* Banner picture */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>Banner</h2>
          <p className="text-deep-forest-400">Use a public image URL.</p>
        </div>
        <div className="flex flex-col gap-2">
          {/* URL */}
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="banner-url" className="ml-4">
              Banner URL
            </label>
            <input
              type="url"
              id="banner-url"
              name="bannerUrl"
              placeholder="Add a public image URL"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
          {/* Alt */}
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="banner-alt" className="ml-4">
              Banner alt text
            </label>
            <input
              type="text"
              id="banner-alt"
              name="bannerAlt"
              placeholder="A short description of the image"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>
      {/* Bio */}
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2>About you</h2>
          <p className="text-deep-forest-400">
            Add a short description about yourself to help others to get to know
            you better.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {/* URL */}
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="bio" className="ml-4">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Write a short bio about yourself"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
              rows={4}
            ></textarea>
            {/* Word counter */}
            <p className="text-right">0 / 160 words</p>
          </div>
        </div>
      </section>
      {/* Manager */}
      <section className="flex flex-col gap-4 p-6 bg-cloud-white-50 rounded-lg">
        <h2>Account type</h2>
        <div className="flex flex-row items-start gap-2 p-4 border border-cloud-white-600 rounded-lg">
          <input
            type="checkbox"
            id="venue-manager"
            className="mt-1.5 cursor-pointer"
          />
          <div>
            <label htmlFor="venue-manager" className="cursor-pointer">
              I want to be a manager
            </label>
            <p className="small-text text-deep-forest-400">
              Become a venue manager to create and manage your own venues and
              view your bookings.
            </p>
          </div>
        </div>
      </section>
      {/* Form actions */}
      <div className="flex justify-center gap-4">
        <Link
          href={"/profile"}
          className="button-text py-2 px-4 rounded-full cursor-pointer bg-transparent text-deep-forest-500 hover:bg-stone-50 hover:shadow-md transition-all duration-300"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="button-text py-2 px-4 rounded-full cursor-pointer bg-ocean-500 text-cloud-white-500 hover:bg-ocean-700 hover:shadow-md transition-all duration-300"
        >
          Save profile
        </button>
      </div>
    </form>
  );
}
