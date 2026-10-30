export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-1 w-full flex-col py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight">
            This is a Next.js app using the new App Router and Tailwind CSS.
          </h1>
          <p className="text-lg leading-8">
            Edit{" "}
            <code className="font-mono font-bold text-ocean-500">
              app/page.tsx
            </code>{" "}
            to get started.
          </p>
          <div className="flex gap-4">
            <a
              href="/coming-soon"
              className="p-4 rounded-4xl border border-ocean-500 text-ocean-500 hover:text-cloud-white-500 hover:bg-ocean-500 transition-all duration-300"
            >
              Coming Soon
            </a>
            <a
              href="/login"
              className="p-4 rounded-4xl border border-ocean-500 text-ocean-500 hover:text-cloud-white-500 hover:bg-ocean-500 transition-all duration-300"
            >
              Login
            </a>
            <a
              href="/register"
              className="p-4 rounded-4xl border border-ocean-500 text-ocean-500 hover:text-cloud-white-500 hover:bg-ocean-500 transition-all duration-300"
            >
              Register
            </a>
            <a
              href="/profile"
              className="p-4 rounded-4xl border border-ocean-500 text-ocean-500 hover:text-cloud-white-500 hover:bg-ocean-500 transition-all duration-300"
            >
              Profile
            </a>
            <a
              href="/venue/[venue_id]"
              className="p-4 rounded-4xl border border-ocean-500 text-ocean-500 hover:text-cloud-white-500 hover:bg-ocean-500 transition-all duration-300"
            >
              Venue
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
