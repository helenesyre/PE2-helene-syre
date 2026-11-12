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
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo";

type NavLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

type NavGroup = {
  title: string;
  links: NavLink[];
};

// Navigation links for the navbar
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Venues", href: "/venues" },
  { label: "Bookings", href: "/bookings" },
];

const dropdownNavLinks: NavGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/", icon: House },
      { label: "Venues", href: "/venues", icon: Search },
      { label: "Bookings", href: "/bookings", icon: CalendarDays },
    ],
  },
  {
    title: "Hosting",
    links: [
      { label: "Dashboard", href: "/bookings", icon: LayoutDashboard },
      { label: "Create venue", href: "/coming-soon", icon: CirclePlusIcon },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Profile", href: "/profile", icon: User },
      { label: "Login", href: "/login", icon: LogIn },
      { label: "Register", href: "/register", icon: UserPlus },
      { label: "Log out", href: "/login", icon: LogOut },
    ],
  },
];

// Navbar component
export default function Navbar() {
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`mt-1`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
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
              {dropdownNavLinks.map((group, key) => (
                <div
                  key={key}
                  className="flex flex-col py-3 first:pt-0 last:pb-0"
                >
                  <span className="pb-1 px-3 text-xs text-deep-forest-400 font-semibold uppercase">
                    {group.title}
                  </span>
                  {group.links.map((link, linkKey) => {
                    const Icon = link.icon;
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
      </nav>
    </header>
  );
}
