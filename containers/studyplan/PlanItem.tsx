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
    <Card className="flex flex-row items-center gap-3 px-5 bg-componentDark">
      <Image
        src={imgUrl}
        width={96}
        height={96}
        alt={`스터디 플랜 ${label} 이미지`}
        style={{
          borderRadius: '15px',
          objectFit: 'cover',
          width: '96px',
          height: '96px',
        }}
      />

      <div className="flex flex-col gap-2 truncate ">
        <p className="text-2xl font-semibold text-white truncate ">{label}</p>
        <p className="truncate text-subtextDark ">{description}</p>
      </div>
    </Card>
  );
}
