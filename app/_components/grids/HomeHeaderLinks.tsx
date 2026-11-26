"use client";

import { User, Building, BookOpen } from "lucide-react";
import Link from "next/link";

export default function HomeHeaderLinks() {
  return (
    <div className="grid gap-2 grid-cols-3 p-6 border border-cloud-white-500/20 bg-opacity-30 backdrop-blur-xs shadow-xl rounded-2xl">
      <Link
        href="/venues"
        className="flex flex-col w-36 items-center gap-2 p-4 text-fern-800 bg-fern-100 border border-fern-800 rounded-2xl"
      >
        <Building size={24} strokeWidth={1.5} className="shrink-0" />
        <p className="font-medium">Venues</p>
      </Link>
      <Link
        href="#how-it-works"
        className="flex flex-col w-36 items-center gap-2 p-4 text-fern-800 bg-fern-100 border border-fern-800 rounded-2xl"
      >
        <BookOpen size={24} strokeWidth={1.5} className="shrink-0" />
        <p className="font-medium">How it works</p>
      </Link>
      <Link
        href="/profile"
        className="flex flex-col w-36 items-center gap-2 p-4 text-fern-800 bg-fern-100 border border-fern-800 rounded-2xl"
      >
        <User size={24} strokeWidth={1.5} className="shrink-0" />
        <p className="font-medium">Profile</p>
      </Link>
    </div>
  );
}
