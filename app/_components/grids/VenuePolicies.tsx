import Link from "next/link";

export default function VenuePolicies() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {/* Check in */}
      <div className="flex flex-col gap-4 justify-between border border-fern-700 p-6 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-fern-700">
            Check-in is from 14:00 to 20:00
          </h3>
          <p className="text-fern-700">Check-out is before 11:00</p>
        </div>
        <Link href="/coming-soon" className="link-text">
          Read more
        </Link>
      </div>
      {/* House rules & guidelines */}
      <div className="flex flex-col gap-4 justify-between border border-fern-700 p-6 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-fern-700">
            House rules & guidelines
          </h3>
          <p className="text-fern-700">
            Review this information to ensure a smooth stay.
          </p>
        </div>
        <Link href="/coming-soon" className="link-text">
          Read more
        </Link>
      </div>
      {/* Safety & property */}
      <div className="flex flex-col gap-4 justify-between border border-fern-700 p-6 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-fern-700">
            Safety & property
          </h3>
          <p className="text-fern-700">
            Carbon monoxide detector not listed, smoke detector present.
          </p>
        </div>
        <Link href="/coming-soon" className="link-text">
          Read more
        </Link>
      </div>
      {/* Cancellation policy */}
      <div className="flex flex-col gap-4 justify-between border border-fern-700 p-6 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-fern-700">
            Cancellation policy
          </h3>
          <p className="text-fern-700">
            This reservation is non-refundable: please review the host&#39;s
            full terms for detailed information.
          </p>
        </div>
        <Link href="/coming-soon" className="link-text">
          Read more
        </Link>
      </div>
    </section>
  );
}
