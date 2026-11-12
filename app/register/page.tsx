import { EyeClosed, UserRoundPlus } from "lucide-react";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100 my-20 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-2xl md:text-3xl">Create an account</h1>
        <p className="text-lg text-deep-forest-400">
          Register to book a venue or manage your own venues.
        </p>
      </div>
      <form className="w-full md:max-w-md">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="username" className="ml-4">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            placeholder="Enter your username"
            className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="ml-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="example@stud.noroff.no"
            className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="ml-4">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 pr-12 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            {/* Button to toggle password visibility */}
            <button
              type="button"
              aria-label="Show password"
              className="absolute right-4 inset-y-0 inset-e-0 cursor-pointer text-deep-forest-400"
            >
              <EyeClosed size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="confirm-password" className="ml-4">
            Confirm password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              autoComplete="current-password"
              placeholder="Confirm your password"
              className="bg-cloud-white-50 border border-cloud-white-600 rounded-4xl p-4 pr-12 w-full shadow-[inset_0_4px_4px_0_rgba(0,0,0,0.25)]"
            />
            {/* Button to toggle password visibility */}
            <button
              type="button"
              aria-label="Show password"
              className="absolute right-4 inset-y-0 inset-e-0 cursor-pointer text-deep-forest-400"
            >
              <EyeClosed size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-start gap-2 mb-4 p-4 bg-cloud-white-50 border border-cloud-white-600 rounded-lg">
          <input
            type="checkbox"
            id="venue-manager"
            name="venue-manager"
            className="mt-1.5 cursor-pointer"
          />
          <div>
            <label htmlFor="venue-manager">
              Register user as a venue manager
            </label>
            <p className="small-text text-deep-forest-400">
              Venue managers can create venues and manage their bookings. Click
              here if you want a manager role.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-deep-forest-500 text-cloud-white-500 button-text rounded-4xl px-4 py-2.5 my-6 cursor-pointer hover:bg-deep-forest-400 transition-all duration-300"
        >
          Create account
          <UserRoundPlus
            size={20}
            strokeWidth={2}
            className="ml-2 inline-block"
          />
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a
          href="/login"
          className="text-ocean-500 font-semibold hover:underline"
        >
          Log in
        </a>
      </p>
    </div>
  );
}
