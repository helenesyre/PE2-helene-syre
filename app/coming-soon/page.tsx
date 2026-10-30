export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600">
        We are working hard to bring you something amazing!
      </p>
      <div className="flex gap-4">
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
  );
}
