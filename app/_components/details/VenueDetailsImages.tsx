import { VenueResponseData } from "@/app/_lib/types";
import Image from "next/image";

export function VenueDetailsImages({
  venueData,
}: {
  venueData: VenueResponseData;
}) {
  const placeholderImage = "/images/placeholder.png";
  const placeholderAlt = "Placeholder image";

  // Check if venue has 1 or more media items, if 1 only display the first image, otherwise display a grid of images
  const mediaToDisplay = venueData.media.slice(0, 5);

  // No image
  if (mediaToDisplay.length === 0) {
    return (
      <section className="grid grid-cols-1">
        <div className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src={placeholderImage}
            alt={placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  // 1 image
  if (mediaToDisplay.length === 1) {
    return (
      <section className="grid grid-cols-1">
        <div className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[0]?.url ?? placeholderImage}
            alt={mediaToDisplay[0]?.alt ?? placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    );
  }

  // 2 images
  if (mediaToDisplay.length === 2) {
    return (
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[0]?.url ?? placeholderImage}
            alt={mediaToDisplay[0]?.alt ?? placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 h-40 lg:h-96">
          {mediaToDisplay.slice(1).map((media, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <Image
                src={media?.url ?? placeholderImage}
                alt={media?.alt ?? placeholderAlt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 3 images
  if (mediaToDisplay.length === 3) {
    return (
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[0]?.url ?? placeholderImage}
            alt={mediaToDisplay[0]?.alt ?? placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-6 h-40 lg:h-96">
          {mediaToDisplay.slice(1).map((media, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <Image
                src={media?.url ?? placeholderImage}
                alt={media?.alt ?? placeholderAlt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 4 images
  if (mediaToDisplay.length === 4) {
    return (
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[0]?.url ?? placeholderImage}
            alt={mediaToDisplay[0]?.alt ?? placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-80 lg:h-96">
          {mediaToDisplay.slice(1).map((media, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <Image
                src={media?.url ?? placeholderImage}
                alt={media?.alt ?? placeholderAlt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // 5 images
  if (mediaToDisplay.length === 5) {
    return (
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[0]?.url ?? placeholderImage}
            alt={mediaToDisplay[0]?.alt ?? placeholderAlt}
            fill
            loading="eager"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 h-80 lg:h-96">
          {mediaToDisplay.slice(1).map((media, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <Image
                src={media?.url ?? placeholderImage}
                alt={media?.alt ?? placeholderAlt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="relative w-full h-64 lg:h-96 rounded-2xl overflow-hidden">
        <Image
          src={venueData.media[0]?.url ?? placeholderImage}
          alt={venueData.media[0]?.alt ?? placeholderAlt}
          fill
          loading="eager"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-6 h-40 lg:h-96">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[1]?.url ?? placeholderImage}
            alt={mediaToDisplay[1]?.alt ?? placeholderAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[2]?.url ?? placeholderImage}
            alt={mediaToDisplay[2]?.alt ?? placeholderAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[3]?.url ?? placeholderImage}
            alt={mediaToDisplay[3]?.alt ?? placeholderAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={mediaToDisplay[4]?.url ?? placeholderImage}
            alt={mediaToDisplay[4]?.alt ?? placeholderAlt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
