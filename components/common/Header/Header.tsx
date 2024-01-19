'use client';

import { usePathname } from 'next/navigation';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as NextUILink,
} from '@nextui-org/react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import Logo from '@/components/common/Header/Logo';
import {
  IconArrowLeft,
  IconArrowRight,
  IconRandomPick,
  IconAttempted,
  IconSolved,
} from '@/public/svgs';
import { problemItems } from '@/containers/problemList/ProblemList';
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

export default function Header() {
  const pathname = usePathname();

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
      >
        <NavbarBrand className="absolute left-[-128px]">
          <Link href="/">
            <Logo className="text-[32px]" />
          </Link>
        </NavbarBrand>

        {pathname.startsWith('/problems') && (
          <NavbarContent
            justify="start"
            className="absolute left-[128px] gap-0"
          >
            <NavbarMenuToggle />
            <NavbarItem className="mx-4">
              <p className="text-xl font-bold">Problem List</p>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                className="dark:bg-backgroundDark bg-background"
              >
                <IconArrowLeft />
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                className="dark:bg-backgroundDark bg-background"
              >
                <IconArrowRight />
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                isIconOnly
                className="dark:bg-backgroundDark bg-background"
              >
                <IconRandomPick />
              </Button>
            </NavbarItem>
          </NavbarContent>
        )}

        {pathname.startsWith('/problems') && (
          <NavbarMenu className="dark:bg-componentDark w-[640px] pt-10 border-r dark:border-borderDark">
            <div className="border dark:border-borderDark w-[582px] rounded-lg overflow-hidden">
              {problemItems.map(({ status, num, title, difficulty }, index) => (
                <NavbarMenuItem
                  key={num}
                  className={`${index !== 9 && 'border-b'} ${
                    pathname === `/problems/${num}` && 'dark:bg-[#3A3A3A]'
                  } dark:border-borderDark w-[580px] py-2 h-12 px-4 `}
                  isActive={pathname !== `/problems/${num}`}
                >
                  <Link
                    href={`/problems/${num}`}
                    className="relative text-base"
                  >
                    <div className="absolute left-0 top-1">
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {status === 'solved' ? (
                        <IconSolved />
                      ) : status === 'attempted' ? (
                        <IconAttempted />
                      ) : null}
                    </div>
                    <span className="w-[400px] truncate absolute left-12 top-1">{`${num}. ${title}`}</span>
                    <span
                      className={`${
                        // eslint-disable-next-line no-nested-ternary
                        difficulty === 'easy'
                          ? 'text-themeGreen'
                          : difficulty === 'hard'
                            ? 'text-themeRed'
                            : 'text-themeYellow'
                      } float-right`}
                    >
                      {capitalizeFirstChar(difficulty)}
                    </span>
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </NavbarMenu>
        )}

        {!pathname.startsWith('/problems') && (
          <NavbarContent justify="end" className="absolute right-[128px]">
            <NavbarItem>
              <DarkModeButton />
            </NavbarItem>
          </NavbarContent>
        )}

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
