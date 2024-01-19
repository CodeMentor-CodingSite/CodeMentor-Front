'use client';

import Link from 'next/link';
import { Button, Pagination } from '@nextui-org/react';
import {
  IconAttempted,
  IconSolved,
  IconSolution,
  IconDescendingOrder,
} from '@/public/svgs';
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

export const problemItems = [
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

export default function ProblemList() {
  const bgOdd = 'bg-white dark:bg-componentDark';
  const bgEven = 'bg-[#F4F4F4] dark:bg-backgroundDark';

  return (
    <div>
      <table className="w-full text-xl table-fixed">
        <colgroup>
          <col width={8} />
          <col width={54} />
          <col width={10} />
          <col width={16} />
          <col width={12} />
        </colgroup>
        <thead>
          <tr className="font-medium text-subtext text-left h-16 border-b dark:border-borderDark leading-[64px] ">
            <th className="pl-3">Status</th>
            <th className="flex items-center justify-between mr-10">
              Title
              <Button isIconOnly className="bg-white dark:bg-backgroundDark">
                <IconDescendingOrder />
              </Button>
            </th>
            <th>Solution</th>
            <th className="relative">
              Acceptance
              <Button
                isIconOnly
                className="absolute bg-white right-3 dark:bg-backgroundDark top-3"
              >
                <IconDescendingOrder />
              </Button>
            </th>
            <th className="relative">
              Difficulty
              <Button
                isIconOnly
                className="absolute right-0 bg-white dark:bg-backgroundDark top-3"
              >
                <IconDescendingOrder />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {problemItems.map(
            (
              { status, num, title, solution, acceptance, difficulty },
              index
            ) => (
              <tr
                key={num}
                className={`${
                  index % 2 === 0 ? bgEven : bgOdd
                } h-16 leading-16`}
              >
                <td className="pl-5">
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {status === 'solved' ? (
                    <IconSolved />
                  ) : status === 'attempted' ? (
                    <IconAttempted />
                  ) : null}
                </td>

                <td className="pl-3 truncate">
                  <Link
                    href={`/problems/${num}`}
                  >{`${num.toString()}. ${title}`}</Link>
                </td>

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <td className="pl-3">
                  <Link href={solution}>
                    <IconSolution />
                  </Link>
                </td>
                <td className="pl-3">{`${acceptance}%`}</td>
                <td
                  className={`${
                    // eslint-disable-next-line no-nested-ternary
                    difficulty === 'easy'
                      ? 'text-themeGreen'
                      : difficulty === 'hard'
                        ? 'text-themeRed'
                        : 'text-themeYellow'
                  } pl-3`}
                >
                  {capitalizeFirstChar(difficulty)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <Pagination
        showControls
        size="lg"
        total={5}
        initialPage={1}
        className="float-right mt-8"
      />
    </div>
  );
}
