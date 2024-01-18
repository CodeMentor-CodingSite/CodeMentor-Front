'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  IconTodo,
  IconAttempted,
  IconSolved,
  IconSolution,
  IconAscendingOrder,
  IconDescendingOrder,
  IconUnordered,
} from '@/public/svgs';
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

const problemItems = [
  {
    status: 'todo',
    num: 1,
    title: 'Two Sum',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'attempted',
    num: 2,
    title: 'Two Sum 1213',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'attempted',
    num: 3,
    title: 'Two Sumdsfa',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'hard',
  },
  {
    status: 'todo',
    num: 4,
    title: 'Two Sum33',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'solved',
    num: 5,
    title: 'Two Sum12324324fdafsafasfdsfdafasdfda234hl4h14h31jkh1jkh431jkh',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'todo',
    num: 6,
    title: 'Two Sum112313',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'todo',
    num: 7,
    title: 'Two Sumeawrr',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'medium',
  },
  {
    status: 'attempted',
    num: 8,
    title: 'Two Sum3',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'todo',
    num: 9,
    title: 'Two Sum',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'easy',
  },
  {
    status: 'solved',
    num: 10,
    title: 'Two Sum',
    solution: 'soultion url',
    acceptance: 51.5,
    difficulty: 'hard',
  },
];

export default function ProblemList() {
  const { theme } = useTheme();

  return (
    <table className="w-full text-xl table-fixed">
      <colgroup>
        <col width={10} />
        <col width={50} />
        <col width={10} />
        <col width={15} />
        <col width={15} />
      </colgroup>
      <thead>
        <tr className="font-medium text-subtext text-left h-16 border-b dark:border-borderDark">
          <th style={{ paddingLeft: '12px' }}>Status</th>
          <th>Title</th>
          <th>Solution</th>
          <th>Acceptance</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {problemItems.map(
          ({ status, num, title, solution, acceptance, difficulty }, index) => (
            <tr
              key={num}
              className="h-16 leading-16"
              style={
                // eslint-disable-next-line no-nested-ternary
                theme === 'dark'
                  ? index % 2 === 0
                    ? { backgroundColor: '#1A1A1A' }
                    : { backgroundColor: '#2A2A2A' }
                  : index % 2 === 0
                    ? { backgroundColor: '#F4F4F5' }
                    : { backgroundColor: '#ffffff' }
              }
            >
              <td style={{ paddingLeft: '12px' }}>
                {/* {status === 'todo' ? (
                <IconTodo />
              ) : status === 'solved' ? (
                <IconSolved />
              ) : (
                <IconAttempted />
              )} */}
              </td>

              <td className="truncate">
                <Link
                  href={`/problems/${num}`}
                >{`${num.toString()}. ${title}`}</Link>
              </td>

              <td>{/* <IconSolution /> */}</td>
              <td>{`${acceptance}%`}</td>
              <td
                style={
                  // eslint-disable-next-line no-nested-ternary
                  difficulty === 'easy'
                    ? { color: '#29C244' }
                    : difficulty === 'hard'
                      ? { color: '#EF4643' }
                      : { color: '#F7BB1F' }
                }
              >
                {capitalizeFirstChar(difficulty)}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
