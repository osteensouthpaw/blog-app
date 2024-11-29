"use client";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Dialog,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBook } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
  return (
    <nav className="p-3 border-b">
      <Container>
        <Flex justify="between" align="center">
          <Link href="/">
            <BiBook size={35} />
          </Link>
          <NavLinks />
          <AuthLinks />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { label: "Blogs", href: "/blogs" },
    { label: "Write", href: "/blogs/new" },
  ];
  return (
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
  );
};

const AuthLinks = () => {
  const { status, data: session } = useSession();

  return (
    <Box>
      {status === "authenticated" ? (
        <Dropdown session={session} />
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
    </Box>
  );
};

const Dropdown = ({ session }: { session: Session }) => {
  return (
    <Dialog.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="focus:outline-none">
            <Avatar
              aria-haspopup
              src={session.user!.image!}
              fallback={<RxAvatar />}
            />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>
            <Text>{session.user?.name}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Flex justify="between" gap="6">
              <Link href={`/users/${session.user?.id}`}>Profile</Link>
              <Badge radius="large" variant="surface">
                New
              </Badge>
            </Flex>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <button onClick={() => signOut()}>Sign Out</button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Dialog.Root>
  );
};

export default NavBar;
