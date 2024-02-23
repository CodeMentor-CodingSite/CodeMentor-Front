import Link from 'next/link';

export default function PlanList({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header className="flex items-end justify-between mb-5">
        <h1 className="text-4xl font-semibold">Study Plan</h1>
        <Link href="/studyplan" className="text-xl font-bold text-themeBlue">
          See all
        </Link>
      </header>

      <section className="grid grid-cols-3 gap-x-8 gap-y-7 auto-rows-[160px]">
        {children}
      </section>
    </section>
  );
}
