import Image from "next/image";
import Link from "next/link";

export default function RecentBookings() {
  return (
    <div className="flex flex-col gap-8 p-6 bg-cloud-white-50 rounded-2xl">
      <div className="flex flex-col gap-1">
        <h3>Recent stays</h3>
        <p>Guests who have stayed at your venues.</p>
      </div>
      <ul className="flex flex-col divide-y divide-cloud-white-600 [&>li]:py-4 [&>li:first-child]:pt-0 [&>li:last-child]:pb-0">
        {/* User 1 */}
        <li className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/users/customer.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center w-full">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">DumanPhoto</p>
                <span className="flex items-center py-0.5 px-2 text-xs font-semibold bg-seafoam-50 border border-seafoam-200 text-ocean-500 rounded-lg">
                  6-9 Oct 2026
                </span>
              </div>
              <p>Villa Collina・2 guests</p>
            </div>
            <Link href="/coming-soon" className="link-text">
              View booking
            </Link>
          </div>
        </li>
        {/* User 2 */}
        <li className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/users/customer.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center w-full">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">JaneDoe</p>
                <span className="flex items-center py-0.5 px-2 text-xs font-semibold bg-seafoam-50 border border-seafoam-200 text-ocean-500 rounded-lg">
                  12-19 Aug 2026
                </span>
              </div>
              <p>Countryside Villa・4 guests</p>
            </div>
            <Link href="/coming-soon" className="link-text">
              View booking
            </Link>
          </div>
        </li>
        {/* User 3 */}
        <li className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/users/customer.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center w-full">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">N3on</p>
                <span className="flex items-center py-0.5 px-2 text-xs font-semibold bg-seafoam-50 border border-seafoam-200 text-ocean-500 rounded-lg">
                  4-7 Jun 2026
                </span>
              </div>
              <p>Villa Oliveto・2 guests</p>
            </div>
            <Link href="/coming-soon" className="link-text">
              View booking
            </Link>
          </div>
        </li>
        {/* User 4 */}
        <li className="flex items-center gap-4">
          <div className="relative aspect-square w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image
              src="/images/users/customer.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center w-full">
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Logan</p>
                <span className="flex items-center py-0.5 px-2 text-xs font-semibold bg-seafoam-50 border border-seafoam-200 text-ocean-500 rounded-lg">
                  2-5 Jun 2026
                </span>
              </div>
              <p>Villa Oliveto・1 guests</p>
            </div>
            <Link href="/coming-soon" className="link-text">
              View booking
            </Link>
          </div>
        </li>
      </ul>
      <button className="flex w-fit self-center items-center justify-center gap-2 bg-deep-forest-500 text-cloud-white-500 button-text py-2.5 px-4 rounded-full cursor-pointer hover:bg-deep-forest-400 transition-colors duration-300">
        View all
      </button>
    </div>
  );
}
