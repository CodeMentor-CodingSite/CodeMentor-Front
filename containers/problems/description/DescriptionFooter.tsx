'use client';

import { Button } from '@nextui-org/react';
import {
  IconThumbsUp,
  IconThumbsDown,
  IconFavorites,
  IconLink,
} from '@/public/svgs';

export default function DescriptionFooter() {
  return (
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
  );
}
