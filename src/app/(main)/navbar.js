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

export default function Navbar({ children }) {
  const { open, toggle } = useDisclosure();
  const [user, setUser] = useState(null);

  return (
    <NextNavbar>
      <NavbarBrand>
        <Link as={NextLink} href="/">
         Home
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link as={NextLink} href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/register">
            Register
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
}
