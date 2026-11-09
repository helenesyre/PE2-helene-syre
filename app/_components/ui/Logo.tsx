import Image from "next/image";

// Logo component
export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Holidaze logo"
      width={156}
      height={30}
      loading="eager"
      className="h-6 md:h-8 w-auto transition-all duration-300"
    />
  );
}
