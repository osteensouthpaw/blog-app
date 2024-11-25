"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";
import { Box, Button, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Blogs", href: "/blogs" },
    { label: "Write", href: "/blogs/new" },
  ];

  return (
    <nav className="p-3 border-b">
      <Container>
        <Flex justify="between" align="center">
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
          {/* <Box>
            {status === "authenticated" ? (
              <Link href={"/api/auth/signout"}>Sign Out</Link>
            ) : (
              <Flex gap="4">
                <Button variant="outline">
                  <Link href={"/auth/signin"}>Sign In</Link>
                </Button>
                <Button>
                  <Link href="/auth/register">Sign Up</Link>
                </Button>
              </Flex>
            )}
          </Box> */}
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
