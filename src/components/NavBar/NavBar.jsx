"use client";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { LuChartSpline } from "react-icons/lu";

function NavBar() {
  const currentPath = usePathname();

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
      <li
        className={`flex items-center rounded-md p-1 font-semibold  hover:bg-gray-200 hover:text-black text-[#64748B] ${currentPath === "/" ? "text-white bg-green-800" : ""}`}
      >
        <Link className="hover:bg-gray-200" href="/">
          <RiHome2Line /> Home
        </Link>
      </li>
      <li
        className={`flex items-center rounded-md p-1 font-semibold hover:bg-gray-200 hover:text-black  text-[#64748B] ${currentPath === "/timeline" ? "text-white bg-green-800" : ""}`}
      >
        <Link className="hover:bg-gray-200" href="/timeline">
          <LuClock3 /> Timeline
        </Link>
      </li>
      <li
        className={`flex items-center rounded-md p-1 font-semibold hover:bg-gray-200 hover:text-black  text-[#64748B] ${currentPath === "/stats" ? "text-white bg-green-800" : ""}`}
      >
        <Link className="hover:bg-gray-200" href="/stats">
          <LuChartSpline /> Stats
        </Link>
      </li>
    </div>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar bg-base-100 mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/">
            <Image src={Logo} alt="Keen Keeper Logo" loading="eager" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">{navLinks}</ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
