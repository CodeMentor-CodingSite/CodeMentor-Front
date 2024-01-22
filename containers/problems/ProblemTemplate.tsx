'use client';

interface ProblemTemplateProps {
  title: string;
  svgComponent: React.ReactNode;
  children: React.ReactNode;
}

export default function ProblemTemplate({
  title,
  svgComponent,
  children,
}: ProblemTemplateProps) {
  return (
    <section className="w-[636px] dark:bg-componentDark rounded-xl overflow-hidden border dark:border-borderDark h-[calc(100%-88px)]">
      <header className="h-9 dark:bg-[#333333] flex font-semibold items-center pl-3 gap-2 border-b dark:border-borderDark">
        {svgComponent}
        <h1>{title}</h1>
      </header>

      {children}
    </section>
  );
}
