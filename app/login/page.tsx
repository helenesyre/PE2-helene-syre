import { EyeClosed, LogIn } from "lucide-react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-2xl md:text-3xl">Hi, welcome back!</h1>
        <p className="text-lg text-deep-forest-400">
          Log in to manage your bookings or venues.
        </p>
      </div>
      <form className="w-full md:max-w-md">
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
        <button
          type="submit"
          className="w-full bg-deep-forest-500 text-cloud-white-500 button rounded-4xl px-4 py-2.5 my-6 cursor-pointer hover:bg-deep-forest-400 transition-all duration-300"
        >
          Login
          <LogIn size={20} strokeWidth={2} className="ml-2 inline-block" />
        </button>
      </form>
      <p>
        Don&#39;t have an account?{" "}
        <a
          href="/register"
          className="text-ocean-500 font-semibold hover:underline"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
