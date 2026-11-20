"use client";
import { useRouter } from "next/navigation";
import { getProfile } from "@/app/_lib/api";
import { useAuth } from "@/app/_lib/stores";
import { ProfileResponse } from "@/app/_lib/types";
import { useQuery } from "@tanstack/react-query";
import { LayoutDashboard } from "lucide-react";
import Tag from "../ui/Tags";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  const { data, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }

  const {
    isPending,
    isError,
    data: profileData,
    error,
  } = useQuery<ProfileResponse>({
    queryKey: ["profile", data?.name],
    enabled: !!data?.name,
    queryFn: () => getProfile(data?.name || "", data?.accessToken || ""),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.message || "An error occurred"}</p>;
  }

  return (
    <section className="rounded-2xl overflow-hidden">
      {/* Banner image */}
      <div className="relative w-full h-44 md:h-60 lg:h-72 overflow-hidden transition-all duration-300">
        <Image
          src={profileData?.data?.banner.url || "/images/users/banner.jpg"}
          alt="..."
          fill
          loading="eager"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* User details */}
      <div className="flex flex-col 2xl:flex-row justify-between px-8 py-10 bg-cloud-white-50 gap-8 2xl:gap-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative aspect-square w-28 h-28 rounded-full overflow-hidden">
            <Image
              src={profileData?.data?.avatar.url || "/images/users/avatar.jpg"}
              alt="..."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-xl">
            <div>
              {profileData?.data?.venueManager === true ? (
                <Tag variant="large" color="secondary">
                  Manager
                </Tag>
              ) : (
                <Tag variant="large" color="primary">
                  Customer
                </Tag>
              )}
              <h2 className="mt-2 mb-1">{profileData?.data?.name}</h2>
              <p>{profileData?.data?.email}</p>
            </div>
            <p className="text-deep-forest-400">
              {profileData?.data?.bio || "No bio added yet."}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 h-fit">
          {profileData?.data?.venueManager === true && (
            <Link
              href="/bookings"
              className="flex justify-center items-center gap-2 bg-ocean-500 text-cloud-white-500 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-700 transition-colors duration-300"
            >
              <LayoutDashboard size={20} strokeWidth={1.5} />
              Manage venues
            </Link>
          )}
          <Link
            href="/profile/edit"
            className="flex justify-center gap-2 border border-ocean-700 text-ocean-700 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-50 transition-colors duration-300"
          >
            Edit profile
          </Link>
          <button
            onClick={handleLogout}
            className="flex justify-center gap-2 border border-ocean-700 text-ocean-700 button-text py-2 px-4 rounded-full cursor-pointer hover:bg-ocean-50 transition-colors duration-300"
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  );
}
