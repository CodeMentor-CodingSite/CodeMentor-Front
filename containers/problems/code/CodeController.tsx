'use client';

import { useState } from 'react';
import { Select, SelectItem, Button } from '@nextui-org/react';
import { IconRefresh } from '@/public/svgs';

export default function CodeController() {
  const [language, setLanguage] = useState(new Set(['Java']));

  const onSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(new Set([e.target.value]));
  };

  return (
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
      <Button isIconOnly className="bg-[#F4F4F5] dark:bg-[#27272A] float-right">
        <IconRefresh />
      </Button>
    </div>
  );
}
