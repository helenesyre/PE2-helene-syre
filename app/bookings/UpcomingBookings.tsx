import Image from "next/image";
import Link from "next/link";
import Tag from "../_components/ui/Tags";

export default function UpcomingBookings() {
  return (
    <div className="flex flex-col gap-8 p-6 bg-cloud-white-50 rounded-2xl">
      <div className="flex flex-col gap-1">
        <h3>Upcoming bookings</h3>
        <p>Guests who have booked your venues.</p>
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
                <p className="text-lg font-semibold">Henriette</p>
                <Tag variant="extraSmall" color="primary">
                  13-15 Nov 2026
                </Tag>
              </div>
              <p>Villa Oliveto・2 guests</p>
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
                <p className="text-lg font-semibold">Preben</p>
                <Tag variant="extraSmall" color="primary">
                  12-24 Dec 2026
                </Tag>
              </div>
              <p>Countryside Villa・2 guests</p>
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
                <p className="text-lg font-semibold">Tuva</p>
                <Tag variant="extraSmall" color="primary">
                  4-5 Jan 2027
                </Tag>
              </div>
              <p>Villa Oliveto・1 guests</p>
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
                <p className="text-lg font-semibold">Travel_101</p>
                <Tag variant="extraSmall" color="primary">
                  2-8 Feb 2027
                </Tag>
              </div>
              <p>Villa Collina・5 guests</p>
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
