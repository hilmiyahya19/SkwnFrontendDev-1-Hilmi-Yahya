import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Kiri: Logo */}
      <div className="navbar-start">
        <a className="btn btn-link text-xl no-underline">
          <img
            src="/images/Dekoor.png"
            alt="Dekoor Logo"
            className="h-8 w-auto object-contain"
          />
        </a>
      </div>

      {/* Tengah: Menu (hanya muncul di layar besar) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer font-semibold"
            >
              About us
            </Link>
          </li>
          <li>
            <details>
              <summary className="font-semibold">Furniture</summary>
              <ul className="p-2">
                <li>
                  <Link
                    to="furniture1"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-semibold"
                  >
                    Furniture 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="furniture2"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-semibold"
                  >
                    Furniture 2
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="partnerships"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer font-semibold"
            >
              Partnerships
            </Link>
          </li>
          <li>
             <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Kanan: Hamburger + Tombol */}
      <div className="navbar-end">
        {/* Tombol hanya muncul di desktop */}
        <a className="btn hidden lg:inline-flex bg-[#E5F0B6]">Sign Up</a>
        <a className="btn hidden btn-link lg:inline-flex">
            <img
            src="/images/shop.png"
            alt="shop Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Dropdown hanya muncul di mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            {/* ikon hamburger */}
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

          {/* Isi dropdown (menu mobile) */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer font-semibold"
              > 
                About us
              </Link>
            </li>
            <li>
              <a className="font-semibold">Furniture</a>
              <ul className="p-2">
                <li>
                   <Link
                    to="furniture1"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-semibold"
                  >
                    Furniture 1
                  </Link>
                </li>
                <li>
                   <Link
                    to="furniture2"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer font-semibold"
                  >
                    Furniture 2
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="partnerships"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer font-semibold"
              >
                Partnerships
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer font-semibold"
              >
                Contact
              </Link>
            </li>
            <li><a className="bg-[#E5F0B6]">Sign Up</a></li>
            <li><a className="pt-3">
                <img
                src="/images/shop.png"
                alt="shop Logo"
                className="h-8 w-auto object-contain"
                />
            </a></li> 
          </ul>
        </div>
      </div>
    </div>
  );
}
