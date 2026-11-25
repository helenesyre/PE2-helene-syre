import RegisterForm from "../_components/forms/RegisterForm";

export default function Register() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] bg-gray-100 my-20 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 items-center mb-12">
        <h1 className="text-2xl md:text-3xl">Create an account</h1>
        <p className="text-lg text-deep-forest-400">
          Register to book a venue or manage your own venues.
        </p>
      </div>
      <RegisterForm />
      <p>
        Already have an account?{" "}
        <a
          href="/login"
          className="text-ocean-500 font-semibold hover:underline"
        >
          Log in
        </a>
      </p>
    </section>
  );
}
