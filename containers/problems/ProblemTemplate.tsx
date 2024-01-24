'use client';

import { Button } from '@nextui-org/react';
import {
  IconProblemDescription,
  IconProblemSolving,
  IconThumbsUp,
  IconThumbsDown,
  IconFavorites,
  IconLink,
} from '@/public/svgs';

interface ProblemTemplateProps {
  title: string;
  svg: string;
  children: React.ReactNode;
}

export default function ProblemTemplate({
  title,
  svg,
  children,
}: ProblemTemplateProps) {
  return (
    <section className="w-[636px]  dark:bg-componentDark rounded-xl overflow-hidden border dark:border-borderDark h-[calc(100%-88px)] flex flex-col">
      <header className="min-h-9 dark:bg-[#333333] flex font-semibold items-center px-3 gap-2 border-b dark:border-borderDark bg-[#FAFAFA]">
        {svg === 'description' ? (
          <IconProblemDescription />
        ) : (
          <IconProblemSolving />
        )}
        <h1>{title}</h1>
      </header>

      <main className="px-4 py-5 overflow-y-scroll grow">{children}</main>

      {title === 'Description' && (
        <footer className="flex items-center justify-between gap-2 px-3 min-h-9">
          <div className="flex gap-2">
            <Button
              startContent={<IconThumbsUp />}
              size="sm"
              className="h-6 text-base font-medium text-subtext dark:text-subtextDark bg-component dark:bg-chipDark"
            >
              23.6K
            </Button>
            <Button
              size="sm"
              isIconOnly
              className="h-6 bg-component dark:bg-chipDark"
            >
              <IconThumbsDown />
            </Button>
          </div>
          <div>
            <Button isIconOnly variant="light" className="h-6">
              <IconFavorites />
            </Button>
            <Button isIconOnly variant="light" className="h-6">
              <IconLink />
            </Button>
          </div>
        </footer>
      )}
    </section>
  );
}
