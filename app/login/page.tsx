import LoginForm from "../_components/forms/LoginForm";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-2xl md:text-3xl">Hi, welcome back!</h1>
        <p className="text-lg text-deep-forest-400">
          Log in to manage your bookings or venues.
        </p>
      </div>
      <LoginForm />
      <p>
        Don&#39;t have an account?{" "}
        <a
          href="/register"
          className="text-ocean-500 font-semibold hover:underline"
        >
          Sign up
        </a>
      </p>
    </section>
  );
}
