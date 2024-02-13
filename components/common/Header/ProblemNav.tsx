import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
  Button,
  ButtonGroup,
  Link as NextUILink,
} from '@nextui-org/react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconRandomPick,
  IconSolved,
  IconAttempted,
  IconRun,
  IconSubmit,
} from '@/public/svgs';
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

const problemItems = [
  {
    status: 'todo',
    num: 1,
    title: 'Two Sum',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'attempted',
    num: 2,
    title: 'Two Sum 1213',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'attempted',
    num: 3,
    title: 'Two Sumdsfa',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'hard',
  },
  {
    status: 'todo',
    num: 4,
    title: 'Two Sum33',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'solved',
    num: 5,
    title: 'Two Sum12324324fdafsafasfdsfdafasdfda234hl4h14h31jkh1jkh431jkh',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'todo',
    num: 6,
    title: 'Two Sum112313',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'todo',
    num: 7,
    title: 'Two Sumeawrr',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'attempted',
    num: 8,
    title: 'Two Sum3',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'todo',
    num: 9,
    title: 'Two Sum',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'solved',
    num: 10,
    title: 'Two Sum',
    solution: 'soultionUrl',
    acceptance: 51.5,
    difficulty: 'hard',
  },
];

export default function ProblemNav({ onClick }: { onClick: () => void }) {
  const pathname = usePathname();
  const problemNum = parseInt(pathname.split('/')[2], 10);

  return (
    <section className="relative w-full">
      <NavbarContent justify="start" className="absolute left-[128px] gap-0">
        <NavbarMenuToggle className="h-6" />
        <NavbarItem className="mx-4">
          <p className="text-xl font-bold">Problem List</p>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextUILink}
            isIconOnly
            className="dark:bg-backgroundDark bg-background"
            href={problemNum === 1 ? '' : `/problems/${problemNum - 1}`}
          >
            <IconArrowLeft />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextUILink}
            isIconOnly
            className="dark:bg-backgroundDark bg-background"
            href={
              problemNum === problemItems.length
                ? ''
                : `/problems/${problemNum + 1}`
            }
          >
            <IconArrowRight />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextUILink}
            isIconOnly
            className="dark:bg-backgroundDark bg-background"
            href={`/problems/${Math.ceil(Math.random() * problemItems.length)}`}
          >
            <IconRandomPick />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark:bg-backgroundDark w-[640px] pt-10 border-r dark:border-borderDark shadow-xl">
        <div className="border dark:border-borderDark w-[582px] rounded-lg overflow-hidden">
          {problemItems.map(({ status, num, title, difficulty }, index) => (
            <NavbarMenuItem
              key={num}
              className={`dark:border-borderDark w-[580px] py-2 h-12 px-4 dark:bg-componentDark ${index !== 9 && 'border-b'} ${
                pathname === `/problems/${num}` &&
                'dark:bg-[#3A3A3A] bg-[#F4F4F4] text-themeBlue font-bold'
              }`}
              isActive={pathname !== `/problems/${num}`}
            >
              <Link
                href={`/problems/${num}`}
                className="relative text-base"
                onClick={onClick}
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

      <NavbarContent className="absolute right-[228px]">
        <NavbarItem>
          <ButtonGroup className="gap-1">
            <Button
              startContent={<IconRun />}
              className="font-bold text-2xl text-subtextDark dark:bg-componentDark"
            >
              Run
            </Button>
            <Button
              startContent={<IconSubmit />}
              className="font-bold text-2xl text-themeGreen dark:bg-componentDark"
            >
              Submit
            </Button>
          </ButtonGroup>
        </NavbarItem>
      </NavbarContent>
    </section>
  );
}
