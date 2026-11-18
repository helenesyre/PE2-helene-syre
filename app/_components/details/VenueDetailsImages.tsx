import Image from "next/image";

export function VenueDetailsImages() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden">
        <Image
          src="/images/venue-detail/venue-cover.jpg"
          alt="..."
          fill
          loading="eager"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-6 h-96">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/venue-detail/venue-2.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/venue-detail/venue-3.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/venue-detail/venue-4.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/venue-detail/venue-5.jpg"
            alt="..."
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
