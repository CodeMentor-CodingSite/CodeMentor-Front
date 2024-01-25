'use client';

import { useState } from 'react';
import { Button, Select, SelectItem } from '@nextui-org/react';
import {
  IconProblemDescription,
  IconProblemSolving,
  IconThumbsUp,
  IconThumbsDown,
  IconFavorites,
  IconLink,
  IconRefresh,
} from '@/public/svgs';

interface ProblemTemplateProps {
  label: string;
  svg: string;
  height: string;
  children: React.ReactNode;
}

export default function ProblemTemplate({
  label,
  svg,
  height,
  children,
}: ProblemTemplateProps) {
  const [language, setLanguage] = useState(new Set(['Java']));

  const onSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(new Set([e.target.value]));
  };

  return (
    <section
      className={`${height} w-[636px]  dark:bg-componentDark rounded-xl overflow-hidden border dark:border-borderDark flex flex-col`}
    >
      <header>
        <div className="min-h-9 dark:bg-[#333333] flex font-semibold items-center px-3 gap-2 border-b dark:border-borderDark bg-[#FAFAFA]">
          {svg === 'description' ? (
            <IconProblemDescription />
          ) : (
            <IconProblemSolving />
          )}
          <h1>{label}</h1>
        </div>
        {label === 'Code' && (
          <div className="min-h-9 border-b dark:border-borderDark overflow-hidden relative bg-[#F4F4F5] dark:bg-[#27272A]">
            <Select
              size="sm"
              radius="none"
              className="h-9 w-28 absloute -top-1"
              selectedKeys={language}
              onChange={onSelectionChange}
              aria-label="코드 언어 선택하기"
            >
              <SelectItem key="Java" value="Java">
                Java
              </SelectItem>
              <SelectItem key="Python" value="Python">
                Python
              </SelectItem>
            </Select>
            <Button
              isIconOnly
              className="bg-[#F4F4F5] dark:bg-[#27272A] float-right"
            >
              <IconRefresh />
            </Button>
          </div>
        )}
      </header>

      <main className="px-4 py-5 overflow-y-scroll grow">{children}</main>

      {label === 'Description' && (
        <footer className="flex items-center justify-between px-3 gap-2 min-h-9">
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

      {label === 'Code' && (
        <p className="text-right pr-4 h-6 text-sm text-subtext dark:text-subtextDark">
          Ln 1, Col 1
        </p>
      )}
    </section>
  );
}
