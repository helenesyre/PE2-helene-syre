"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Get parent route
  const parentPath = pathname.substring(0, pathname.lastIndexOf("/")) || "/";

  // Get parent page name
  const parentName = parentPath.split("/").filter(Boolean).pop() || "Home";

  const formattedName =
    parentName.charAt(0).toUpperCase() + parentName.slice(1);

  return (
    <Link
      href={parentPath}
      className="flex items-center gap-1 w-fit text-fern-700 hover:text-ocean-500 hover:-translate-x-1.5 transition-all duration-400"
    >
      <ChevronLeft size={20} strokeWidth={1.5} />
      <span className="font-medium">Back to {formattedName}</span>
    </Link>
  );
};

export default Breadcrumb;
