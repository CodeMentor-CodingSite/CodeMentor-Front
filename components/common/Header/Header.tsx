import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@nextui-org/react';

export default function Header() {
  return (
    <header className="h-16 mx-auto">
      <Navbar
        position="static"
        className="relative bg-componentDark border-borderDark"
        isBordered
      >
        <NavbarBrand className="absolute left-[-128px]">
          <Link href="/" color="warning" className="text-[32px] font-bold">
            <h1>Code Mentor</h1>
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end" className="gap-0 absolute right-[-128px]">
          <NavbarItem>
            <Button
              as={Link}
              className="text-subtextDark bg-componentDark text-2xl h-12 w-[120px] font-bold"
            >
              Sign In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
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
