"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    {
      label: "Write",
      href: "/new",
      className: "text-zinc-500 hover:text-zinc-900 transition-colors",
    },
    {
      label: "sign Up",
      href: "/",
      className: "text-zinc-500 hover:text-zinc-900 transition-colors",
    },
    {
      label: "Sign In",
      href: "/",
      className: "text-zinc-500 hover:text-zinc-900 transition-colors",
    },
  ];

  return (
    <nav className="flex justify-between h-14 px-5 items-center border-b">
      <Link href="/">
        <BiBook size={35} />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li>
            <Link href={link.href} className={link.className}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
