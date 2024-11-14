"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const links = [
    { label: "Blogs", href: "/blogs" },
    { label: "Write", href: "/blogs/new" },
    { label: "sign Up", href: "/sign-up" },
    { label: "Sign In", href: "/sign-in" },
  ];

  return (
    <nav className="flex justify-between h-14 px-5 items-center border-b">
      <Link href="/">
        <BiBook size={35} />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={` ${
                pathname === link.href ? "text-zinc-900" : "text-zinc-500"
              }  hover:text-zinc-900 transition-colors`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
