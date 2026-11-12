import Link from "next/link";
import Logo from "../ui/Logo";
import { CircleArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Footer component for the application
export default function Footer() {
  return (
    <footer className="flex flex-col xl:flex-row items-start xl:items-stretch justify-between py-16 px-6 md:px-10 lg:px-16 gap-16 bg-cloud-white-50">
      <div className="flex flex-col items-start gap-8 xl:gap-32">
        {/* Newsletter */}
        <div className="flex flex-col items-start gap-4">
          <h2>Subscribe to our newsletter</h2>
          <form className="inline-flex items-center gap-4 border-b border-deep-forest-500 pb-3">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="bg-transparent outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="shrink-0 rounded-full cursor-pointer hover:text-ocean-500 transition-all duration-30"
            >
              <CircleArrowRight size={24} strokeWidth={1.5} />
            </button>
          </form>
        </div>
        {/* Logo */}
        <Logo />
      </div>
      {/* Footer navigation links */}
      <div className="flex flex-col md:flex-row items-start xl:items-stretch gap-12 md:gap-16 2xl:gap-20">
        <div className="flex flex-col justify-between gap-8 pl-4 border-l border-ocean-100">
          {/* Pages */}
          <ul className="flex flex-col gap-2 w-40 2xl:w-52">
            <li>
              <Link href={"/"} className="hover:text-ocean-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/venues"} className="hover:text-ocean-500">
                Venues
              </Link>
            </li>
            <li>
              <Link href={"/profile"} className="hover:text-ocean-500">
                Profile
              </Link>
            </li>
          </ul>
          {/* Policy and terms */}
          <ul className="flex md:flex-col gap-6 md:gap-2 small-text">
            <li>
              <Link href={"/coming-soon"} className="hover:text-ocean-500">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href={"/coming-soon"} className="hover:text-ocean-500">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        {/* Footer navigation links */}
        <div className="flex flex-col justify-between gap-8 pl-4 border-l border-ocean-100">
          {/* Some icons */}
          <ul className="flex md:flex-col gap-3 w-40 2xl:w-52">
            <li>
              <Link
                href={"https://www.linkedin.com/"}
                target="_blank"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-full border border-ocean-100 hover:text-ocean-500"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.facebook.com/"}
                target="_blank"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-ocean-100 hover:text-ocean-500"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.instagram.com/"}
                target="_blank"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-ocean-100 hover:text-ocean-500"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </Link>
            </li>
          </ul>
          {/* Copyright */}
          <p className="small-text">
            &copy; 2026 Holidaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
