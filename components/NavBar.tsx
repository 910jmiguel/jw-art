import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between max-container padding-container relative py-1 px-20 items-center border-2 font-sans">
      <Link href="/">
        <Image
          src="/logo-transparent1.png"
          alt="logo"
          width={200}
          height={100}
        />

      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="font-bold cursor-pointer space-x-6 mr-20 transition-all hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
