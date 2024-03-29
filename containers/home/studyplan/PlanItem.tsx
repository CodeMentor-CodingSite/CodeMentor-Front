import Image from 'next/image';
import { Card } from '@nextui-org/react';

interface PlanItemProps {
  imgUrl: string;
  label: string;
  description: string;
}

export default function PlanItem({
  imgUrl,
  label,
  description,
}: PlanItemProps) {
  return (
    <Card className="flex flex-row items-center px-5 gap-3 dark:bg-componentDark">
      <Image
        src={imgUrl}
        width={96}
        height={96}
        alt={`스터디 플랜 ${label} 이미지`}
        className="rounded-xl object-cover w-[96px] h-[96px]"
      />

      <div className="flex flex-col truncate gap-2 ">
        <p className="text-2xl font-semibold truncate dark:text-white ">
          {label}
        </p>
        <p className="truncate text-subtext ">{description}</p>
      </div>
    </Card>
  );
}
