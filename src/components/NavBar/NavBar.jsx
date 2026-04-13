import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";

const navbar = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Timeline",
    path: "/timeline",
  },
  {
    id: 3,
    name: "Stats",
    path: "/stats",
  },
];

const navLinks = navbar.map((nav) => (
  <li className="mr-5" key={nav.id}>
    <Link
      className="text-[#13131395] dark:text-white py-2 font-semibold  dark:hover:text-white"
      href={nav.path}
    >
      {nav.name}
    </Link>
  </li>
));

function NavBar() {
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Image src={Logo} alt="Keen Keeper Logo" loading="eager"  />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
