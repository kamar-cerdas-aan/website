"use client";

import { useState } from "react";
import NextLink from "next/link";

import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  useDisclosure,
  User,
} from "@nextui-org/react";

export default function Navbar({ username, children }) {
  const { open, toggle } = useDisclosure();
  const [user, setUser] = useState(null);

  return (
    <NextNavbar>
      <NavbarBrand>
        <p>Hello, {username}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link as={NextLink} href="login">
            Log out
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
}
