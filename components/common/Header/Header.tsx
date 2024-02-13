'use client';

import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NextUILink,
} from '@nextui-org/react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import Logo from '@/components/common/Header/Logo';
import ProblemNav from './ProblemNav';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="h-16 mx-auto">
      <Navbar
        position="static"
        className={`relative ${
          pathname.startsWith('/problems')
            ? 'dark:bg-backgroundDark'
            : 'dark:bg-componentDark'
        } dark:border-borderDark`}
        isBordered={!pathname.startsWith('/problems')}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand className="absolute left-[-128px]">
          <Link href="/">
            <Logo className="text-[32px]" />
          </Link>
        </NavbarBrand>

        {pathname.startsWith('/problems') && <ProblemNav onClick={onClick} />}

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
              href="/login"
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
              href="/signUp"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
