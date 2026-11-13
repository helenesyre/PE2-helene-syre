import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type DestinationCard = {
  src: string;
  alt: string;
  span: string;
  city: string;
  country: string;
  title: string;
};

// Array of destination cards with their respective details
const cards: DestinationCard[] = [
  {
    src: "/images/lofoten.jpg",
    alt: "Kvalvika Beach",
    span: "md:col-span-3",
    city: "Lofoten",
    country: "Norway",
    title: "Kvalvika Beach",
  },
  {
    src: "/images/rome.jpg",
    alt: "Altare della Patria",
    span: "md:col-span-2",
    city: "Rome",
    country: "Italy",
    title: "Altare della Patria",
  },
  {
    src: "/images/paris.jpg",
    alt: "Eiffel Tower",
    span: "md:col-span-2",
    city: "Paris",
    country: "France",
    title: "Eiffel Tower",
  },
  {
    src: "/images/fuji.jpg",
    alt: "Chureito Pagoda",
    span: "md:col-span-3",
    city: "Mount Fuji",
    country: "Japan",
    title: "Chureito Pagoda",
  },
];

// Destination grid component
export default function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 [&:has(>:hover)>:not(:hover)]:opacity-60">
      {cards.map((card) => (
        <div
          key={card.src}
          className={`group relative cursor-pointer flex flex-col justify-end h-105 transition-opacity duration-300 ${card.span}`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes={
              card.span === "md:col-span-3"
                ? "(min-width: 768px) 60vw, 100vw"
                : "(min-width: 768px) 40vw, 100vw"
            }
            className="object-cover rounded-2xl"
          />
          <div className="relative flex items-center justify-between gap-2 p-4 md:p-8">
            <div className="flex flex-col gap-2">
              <span className="label-text-lowercase text-cloud-white-500">
                {card.city}・{card.country}
              </span>
              <h3 className="text-cloud-white-500">{card.title}</h3>
            </div>
            <ArrowUpRight
              size={56}
              strokeWidth={1.5}
              className="shrink-0 text-cloud-white-500 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
