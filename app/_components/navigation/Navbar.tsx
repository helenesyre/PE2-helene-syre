"use client";

import {
  CalendarDays,
  CirclePlusIcon,
  House,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Search,
  User,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";
import type { NavLink, NavGroup } from "../../_lib/types";
import { useAuth } from "@/app/_lib/stores";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Navbar component
export default function Navbar() {
  const { data, isAuthenticated, isVenueManager, logout } = useAuth();
  const router = useRouter();

  // Navigation links for the navbar
  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Venues", href: "/venues" },
    { label: "Bookings", href: "/bookings", disabled: !isVenueManager() },
  ];

  const dropdownNavLinks: NavGroup[] = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/", icon: House },
        { label: "Venues", href: "/venues", icon: Search },
        {
          label: "Bookings",
          href: "/bookings",
          icon: CalendarDays,
          disabled: !isVenueManager(),
        },
      ],
    },
    {
      title: "Hosting",
      links: [
        { label: "Dashboard", href: "/bookings", icon: LayoutDashboard },
        { label: "Create venue", href: "/venues/create", icon: CirclePlusIcon },
      ],
      disabled: !isVenueManager(),
    },
    {
      title: "Account",
      links: [
        {
          label: "Profile",
          href: "/profile",
          icon: User,
          disabled: !isAuthenticated(),
        },
        {
          label: "Login",
          href: "/login",
          icon: LogIn,
          disabled: isAuthenticated(),
        },
        {
          label: "Register",
          href: "/register",
          icon: UserPlus,
          disabled: isAuthenticated(),
        },
        {
          label: "Log out",
          href: "#",
          icon: LogOut,
          onClick: () => {
            logout();
            toggleMenu();
            router.push("/login");
          },
          disabled: !isAuthenticated(),
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to handle clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <header>
      <nav className="flex items-center justify-between p-6 md:px-10 lg:px-16 bg-cloud-white-50 transition-all duration-300">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <span
              aria-hidden="true"
              className="h-10 w-0.5 rounded-full bg-cloud-white-600"
            />
            {navLinks
              .filter((link) => !link.disabled)
              .map((link) => (
                <Link key={link.href} href={link.href} className={`mt-1`}>
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated() && (
            <Link href={"/profile"}>
              <Image
                src={data?.avatar?.url ?? "/public/images/users/avatar.jpg"}
                alt={data?.avatar?.alt ?? ""}
                width={36}
                height={36}
                className="rounded-full object-cover aspect-square border border-deep-forest-500"
              />
            </Link>
          )}
          <div className="relative">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-full border border-deep-forest-500 cursor-pointer"
            >
              {isOpen ? (
                <X size={18} strokeWidth={1.5} />
              ) : (
                <Menu size={18} strokeWidth={1.5} />
              )}
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-3 w-72 md:w-60 bg-cloud-white-50 border border-cloud-white-600 rounded-md shadow-md p-4 z-10 divide-y divide-seafoam-100"
              >
                {dropdownNavLinks
                  .filter((group) => !group.disabled)
                  .map((group, key) => (
                    <div
                      key={key}
                      className="flex flex-col py-3 first:pt-0 last:pb-0"
                    >
                      <span className="pb-1 px-3 text-xs text-deep-forest-400 font-semibold uppercase">
                        {group.title}
                      </span>
                      {group.links
                        .filter((link) => !link.disabled)
                        .map((link, linkKey) => {
                          const Icon = link.icon;
                          if (link.onClick) {
                            return (
                              <button
                                key={linkKey}
                                onClick={link.onClick}
                                className={`flex flex-row items-center gap-2 py-1.5 px-3 text-sm cursor-pointer hover:bg-seafoam-100 hover:font-medium transition-all duration-300 rounded-md`}
                              >
                                {Icon && <Icon size={20} strokeWidth={1.5} />}
                                {link.label}
                              </button>
                            );
                          }
                          return (
                            <Link
                              key={linkKey}
                              href={link.href}
                              onClick={toggleMenu}
                              className={`flex flex-row items-center gap-2 py-1.5 px-3 text-sm hover:bg-seafoam-100 hover:font-medium transition-all duration-300 rounded-md`}
                            >
                              {Icon && <Icon size={20} strokeWidth={1.5} />}
                              {link.label}
                            </Link>
                          );
                        })}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
