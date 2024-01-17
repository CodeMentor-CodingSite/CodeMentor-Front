import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NextUILink
} from '@nextui-org/react';
import Link from "next/link";
import DarkModeButton from './DarkModeButton';
import Logo from "@/components/common/Header/Logo";

export default function Header() {
  return (
    <header className="h-16 mx-auto">
      <Navbar
        position="static"
        className="relative dark:bg-componentDark dark:border-borderDark"
        isBordered
      >
        <NavbarBrand className="absolute left-[-128px]">
          <Link href="/">
            <Logo className='text-[32px]'/>
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end" className="absolute right-[128px]">
          <NavbarItem>
            <DarkModeButton />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-0 absolute right-[-128px]">
          <NavbarItem>
            <Button
              as={NextUILink}
              variant="light"
              className="text-subtext  text-2xl h-12 w-[120px] font-bold"
            >
              Sign In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={NextUILink}
              variant="flat"
              color="warning"
              className="text-2xl h-12 w-[120px] font-bold"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
