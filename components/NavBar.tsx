import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between max-container padding-container relative py-4 px-20 items-center font-sans bg-lightgray">
      <Link href="/">
        <Image
          src="/logo-transparent1.png"
          alt="logo"
          width={180}
          height={50}
        />
      </Link>

      {/*Navigation Bar*/}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-bold text-xl cursor-pointer space-x-6 mr-20 transition-all hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/*Hamburger section (FIX)*/}
      <details className="dropdown inline-block cursor-pointer lg:hidden">
        <summary className="">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex justify-center items-center">
          <li>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="cursor-pointer space-x-6 mr-20 transition-all hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default NavBar;
