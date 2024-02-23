'use client';

import { IconProblemDescription, IconProblemSolving } from '@/public/svgs';
import { DescriptionFooter } from '@/containers/problems/description';
import { CodeFooter, CodeController } from '@/containers/problems/code';

interface ProblemTemplateProps {
  label: string;
  height: string;
  children: React.ReactNode;
}

export default function ProblemTemplate({
  label,
  height,
  children,
}: ProblemTemplateProps) {
  return (
    <section
      className={`${height} w-[636px]  dark:bg-componentDark rounded-xl overflow-hidden border dark:border-borderDark flex flex-col`}
    >
      <header>
        <div className="min-h-9 dark:bg-[#333333] flex font-semibold items-center px-3 gap-2 border-b dark:border-borderDark bg-[#FAFAFA]">
          {label === 'Description' ? (
            <IconProblemDescription />
          ) : (
            <IconProblemSolving />
          )}
          <h1>{label}</h1>
        </div>

        {label === 'Code' && <CodeController />}
      </header>

      <main className="px-4 py-5 overflow-y-scroll grow">{children}</main>

      {label === 'Description' ? <DescriptionFooter /> : <CodeFooter />}
    </section>
  );
}
